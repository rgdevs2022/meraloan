import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  pan: string;
  gender: string;
  employmentType: string;
  salary: number;
  desiredAmount: number;
  city: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  notes: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    mobile: {
      type: String,
      required: true,
      match: [/^[6-9]\d{9}$/, "Invalid mobile"],
    },
    pan: {
      type: String,
      required: true,
      uppercase: true,
      match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN"],
    },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    employmentType: {
      type: String,
      required: true,
      enum: ["Salaried", "Self-Employed", "Business", "Freelancer"],
    },
    salary: { type: Number, required: true, min: 0 },
    desiredAmount: { type: Number, required: true, min: 0 },
    city: { type: String, required: true, trim: true },
    status: {
      type: String,
      default: "new",
      enum: ["new", "contacted", "qualified", "converted", "lost"],
    },
    notes: { type: String, default: "" },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

const Lead: Model<ILead> =
  mongoose.models.loanleads || mongoose.model<ILead>("loanleads", LeadSchema, "loanleads");

export default Lead;
