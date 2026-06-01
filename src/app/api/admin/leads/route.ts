import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";

function checkAdmin(req: NextRequest) {
  const auth = req.headers.get("x-admin-secret");
  return auth === process.env.ADMIN_SECRET;
}

export async function GET(req: NextRequest) {
  if (!checkAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") || "1"));
  const limit = Math.min(100, Number(searchParams.get("limit") || "20"));
  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "";
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const exportCsv = searchParams.get("export") === "csv";

  await connectDB();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = {};
  if (search) {
    query.$or = [
      { firstName: { $regex: search, $options: "i" } },
      { lastName: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { mobile: { $regex: search, $options: "i" } },
      { city: { $regex: search, $options: "i" } },
    ];
  }
  if (status) query.status = status;
  if (from || to) {
    query.createdAt = {};
    if (from) query.createdAt.$gte = new Date(from);
    if (to) query.createdAt.$lte = new Date(to);
  }

  if (exportCsv) {
    const leads = await Lead.find(query).sort({ createdAt: -1 }).lean();
    const headers = ["ID","First Name","Last Name","Email","Mobile","PAN","Gender","Employment","Salary","Desired Amount","City","Status","Source","Created At"];
    const rows = leads.map((l) => [
      l._id, l.firstName, l.lastName, l.email, l.mobile, l.pan,
      l.gender, l.employmentType, l.salary, l.desiredAmount,
      l.city, l.status, l.source, new Date(l.createdAt).toISOString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(",")).join("\n");
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=leads.csv",
      },
    });
  }

  const total = await Lead.countDocuments(query);
  const leads = await Lead.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return NextResponse.json({ leads, total, page, pages: Math.ceil(total / limit) });
}

export async function PATCH(req: NextRequest) {
  if (!checkAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { id, status, notes } = body;
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const update: any = {};
  if (status) update.status = status;
  if (notes !== undefined) update.notes = String(notes).slice(0, 2000);

  const lead = await Lead.findByIdAndUpdate(id, update, { new: true }).lean();
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true, lead });
}
