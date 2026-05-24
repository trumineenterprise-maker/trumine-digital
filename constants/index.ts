import { 
  ShieldCheck, LockKeyhole, CheckCircle, Activity, 
  FileSpreadsheet, Calculator, Briefcase, BarChart3 
} from 'lucide-react';

export const siteConfig = {
  name: "Trumine Digital",
  email: "partnerships@truminedigital.com",
  phone: "+1 (800) 555-0199",
  volumeTiers: ["0 - 5 Clients", "6 - 10 Clients", "11+ Clients (Enterprise)"],
};

export const trustPillars = [
  { 
    id: 1, 
    icon: ShieldCheck, 
    title: "Udyam Registered Entity", 
    desc: "Officially recognized and verified business operations." 
  },
  { 
    id: 2, 
    icon: LockKeyhole, 
    title: "100% Data Confidentiality", 
    desc: "Strict NDAs and isolated data infrastructure." 
  },
  { 
    id: 3, 
    icon: CheckCircle, 
    title: "Audit-Ready Accuracy", 
    desc: "Rigorous standards for high-volume reconciliations." 
  },
  { 
    id: 4, 
    icon: Activity, 
    title: "Encrypted Workflows", 
    desc: "Secure channels for all firm communications." 
  }
];

export const coreServices = [
  { 
    id: "remediation",
    title: "QBO Remediation", 
    icon: FileSpreadsheet, 
    desc: "Systematic cleanup of historical data and chart of accounts." 
  },
  { 
    id: "ledger",
    title: "Ledger Management", 
    icon: Calculator, 
    desc: "High-volume reconciliations maintained with zero-defect tolerance." 
  },
  { 
    id: "payroll",
    title: "White-Label Payroll", 
    icon: Briefcase, 
    desc: "Backend processing and compliance tracking prepared for final sign-off." 
  },
  { 
    id: "reporting",
    title: "Financial Reporting", 
    icon: BarChart3, 
    desc: "Drafting of balance sheets, P&L, and custom management reports." 
  }
];

export const processSteps = [
  { 
    step: "01", 
    title: "Secure Onboarding & Data Access", 
    desc: "We establish encrypted communication channels and secure restricted access to your QBO environments." 
  },
  { 
    step: "02", 
    title: "Standardized Processing", 
    desc: "Our team executes categorizations, reconciliations, and payroll prep strictly according to your firm's SOPs." 
  },
  { 
    step: "03", 
    title: "CPA Review & Final Approval", 
    desc: "You receive clean, audit-ready ledgers and drafted reports to review, approve, and present to your clients." 
  }
];