/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Calculator, Percent, Sparkles, Receipt, RefreshCw } from "lucide-react";

export default function TaxCalculator() {
  const [calcMode, setCalcMode] = useState<"gst" | "tax">("gst");

  // GST State
  const [amount, setAmount] = useState<number>(10000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [isInclusive, setIsInclusive] = useState<boolean>(false);

  // Income Tax State (simplified for Indian FY Tax slabs as a sample)
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [annualDeductions, setAnnualDeductions] = useState<number>(150000);

  // GST Calculations
  const calculatedGst = isInclusive
    ? amount - amount / (1 + gstRate / 100)
    : amount * (gstRate / 100);

  const finalAmount = isInclusive ? amount : amount + calculatedGst;
  const sgstCgst = calculatedGst / 2;

  // Income Tax Calculations (simplified New vs Old Slab)
  const calculateOldRegimeTax = (income: number, deductions: number) => {
    const taxable = Math.max(0, income - deductions);
    let tax = 0;
    if (taxable <= 250000) return 0;
    if (taxable > 250000 && taxable <= 500000) {
      tax += (taxable - 250000) * 0.05;
    } else if (taxable > 500000) {
      tax += 250000 * 0.05;
      if (taxable <= 1000000) {
        tax += (taxable - 500000) * 0.20;
      } else {
        tax += 500000 * 0.20;
        tax += (taxable - 1000000) * 0.30;
      }
    }
    // Add 4% cess
    return Math.round(tax * 1.04);
  };

  const calculateNewRegimeTax = (income: number) => {
    // FY 2025-26 under modernized flat slabs
    // Standard deduction of 75000 already included
    const taxable = Math.max(0, income - 75000);
    let tax = 0;
    if (taxable <= 400000) return 0;
    else if (taxable > 400000 && taxable <= 800000) {
      tax += (taxable - 400000) * 0.05;
    } else if (taxable > 800000 && taxable <= 1200000) {
      tax += 400000 * 0.05;
      tax += (taxable - 800000) * 0.10;
    } else if (taxable > 1200000 && taxable <= 1600000) {
      tax += 400000 * 0.05;
      tax += 400000 * 0.10;
      tax += (taxable - 1200000) * 0.15;
    } else if (taxable > 1600000 && taxable <= 2000000) {
      tax += 400000 * 0.05;
      tax += 400000 * 0.10;
      tax += 400000 * 0.15;
      tax += (taxable - 1600000) * 0.20;
    } else if (taxable > 2000000) {
      tax += 400000 * 0.05;
      tax += 400000 * 0.10;
      tax += 400000 * 0.15;
      tax += 400000 * 0.20;
      tax += (taxable - 2000000) * 0.30;
    }
    // Tax rebate up to 12L under new regime (taxable <= 12,00,000 means no tax actually)
    if (taxable <= 1200000) return 0;
    return Math.round(tax * 1.04);
  };

  const oldRegimeTax = calculateOldRegimeTax(annualIncome, annualDeductions);
  const newRegimeTax = calculateNewRegimeTax(annualIncome);
  const taxSavings = Math.max(0, oldRegimeTax - newRegimeTax);

  return (
    <div className="bg-white border border-slate-300 shadow-xl rounded-none overflow-hidden max-w-4xl mx-auto">
      {/* Title Header */}
      <div className="bg-[#4E220F] text-white p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-b-2 border-[#9D6638]">
        <div className="flex items-center gap-3">
          <div className="bg-[#9D6638] p-2.5 rounded-none text-white border border-[#4E220F]">
            <Calculator className="w-6 h-6" id="calc-header-icon" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif uppercase tracking-tight text-white">KGKP Interactive Calculators</h3>
            <p className="text-xs text-slate-300">Fast estimation tools for businesses and taxpayers</p>
          </div>
        </div>
        
        {/* Mode Selector Toggle */}
        <div className="flex bg-[#4E220F]/90 p-1 rounded-none border border-[#9D6638]/40">
          <button
            onClick={() => setCalcMode("gst")}
            className={`px-4 py-1.5 rounded-none text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
              calcMode === "gst"
                ? "bg-[#9D6638] text-white shadow font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Percent className="w-3.5 h-3.5" /> GST Calculator
          </button>
          <button
            onClick={() => setCalcMode("tax")}
            className={`px-4 py-1.5 rounded-none text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
              calcMode === "tax"
                ? "bg-[#9D6638] text-white shadow font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Receipt className="w-3.5 h-3.5" /> Income Tax
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 bg-white text-slate-900">
        {calcMode === "gst" ? (
          /* GST Calculator UI */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-[#4E220F] uppercase tracking-wider border-b border-slate-200 pb-2">GST Configurator</h4>
              
              {/* Type Switch */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Calculation Type</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-50 border border-slate-200 rounded-none">
                  <button
                    onClick={() => setIsInclusive(false)}
                    className={`py-2 text-xs font-bold rounded-none transition-all ${
                      !isInclusive ? "bg-[#4E220F] text-white shadow-sm" : "text-slate-500 hover:text-[#4E220F]"
                    }`}
                  >
                    GST Exclusive (+ Add)
                  </button>
                  <button
                    onClick={() => setIsInclusive(true)}
                    className={`py-2 text-xs font-bold rounded-none transition-all ${
                      isInclusive ? "bg-[#4E220F] text-white shadow-sm" : "text-slate-500 hover:text-[#4E220F]"
                    }`}
                  >
                    GST Inclusive (- Extract)
                  </button>
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Base Amount ({isInclusive ? "Inclusive Value" : "Exclusive Value"})
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold font-mono">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    min="1"
                    className="w-full pl-8 pr-4 py-2.5 rounded-none border border-slate-300 text-slate-900 font-bold focus:ring-1 focus:ring-[#9D6638] focus:border-[#9D6638] focus:outline-none bg-slate-50"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="500000"
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full mt-3 accent-[#9D6638]"
                />
              </div>

              {/* Rate Presets */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">GST Rate Category</label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 12, 18, 28].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setGstRate(rate)}
                      className={`py-2 text-xs font-bold rounded-none transition-all ${
                        gstRate === rate
                          ? "bg-[#9D6638] text-white border border-[#9D6638]"
                          : "bg-white text-slate-650 border border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* GST Output */}
            <div className="bg-slate-50 rounded-none p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#4E220F] uppercase tracking-wider pb-3 border-b border-slate-200 mb-4 flex items-center gap-1.5">
                  <Receipt className="w-4 h-4 text-[#9D6638]" /> Breakdown Summary
                </h4>

                <div className="space-y-3.5 text-xs text-slate-600 font-mono">
                  <div className="flex justify-between">
                    <span>Base Amount:</span>
                    <span className="font-bold text-slate-900">
                      ₹{(isInclusive ? amount - calculatedGst : amount).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>CGST (Central GST - {gstRate / 2}%):</span>
                    <span className="font-medium text-slate-700">
                      ₹{sgstCgst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>SGST (State GST - {gstRate / 2}%):</span>
                    <span className="font-medium text-slate-700">
                      ₹{sgstCgst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-dashed border-slate-300">
                    <span>Total GST Tax Component:</span>
                    <span className="font-bold text-[#9D6638]">
                      + ₹{calculatedGst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-1">Total Invoice billing</span>
                    <span className="text-2xl font-mono font-black text-[#4E220F]">
                      ₹{finalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="bg-[#4E220F] text-white px-3.5 py-1 text-xs font-black border border-[#9D6638]">
                    Rate: {gstRate}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Income tax estimate comparison */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-[#4E220F] uppercase tracking-wider border-b border-slate-200 pb-2">Annual Personal Income</h4>
              
              {/* Annual Income Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Estimated Gross Annual Income
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold font-mono">₹</span>
                  <input
                    type="number"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    min="100000"
                    className="w-full pl-8 pr-4 py-2.5 rounded-none border border-slate-300 text-slate-900 font-bold focus:ring-1 focus:ring-[#9D6638] focus:border-[#9D6638] focus:outline-none bg-slate-50"
                  />
                </div>
                <input
                  type="range"
                  min="200000"
                  max="4000000"
                  step="25000"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full mt-3 accent-[#9D6638]"
                />
              </div>

              {/* Deductions Input (Applicable to Old Regime) */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Tax Exemptions & Deductions (80C, HRA etc. - Old Regime only)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold font-mono">₹</span>
                  <input
                    type="number"
                    value={annualDeductions}
                    onChange={(e) => setAnnualDeductions(Number(e.target.value))}
                    min="0"
                    className="w-full pl-8 pr-4 py-2.5 rounded-none border border-slate-300 text-slate-900 font-bold focus:ring-1 focus:ring-[#9D6638] focus:border-[#9D6638] focus:outline-none bg-slate-50"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  Note: The simplified New Tax Regime offers standard flat deductions of ₹75,000 but disallows general investment offsets (80C, HRA, etc.).
                </p>
              </div>
            </div>

            {/* Income Tax comparison outputs */}
            <div className="bg-slate-50 rounded-none p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#4E220F] uppercase tracking-wider pb-3 border-b border-slate-200 mb-4 flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4 text-[#9D6638]" /> Regime Tax Comparison
                </h4>

                <div className="space-y-4">
                  {/* New Regime Card */}
                  <div className="bg-white p-3.5 rounded-none border border-slate-200 shadow-sm flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-teal-700 font-bold uppercase tracking-wider block">New Regime (FY 2025-26)</span>
                      <span className="text-lg font-mono font-bold text-[#4E220F]">
                        ₹{newRegimeTax.toLocaleString("en-IN")}
                      </span>
                    </div>
                    {newRegimeTax < oldRegimeTax && (
                      <span className="bg-teal-50 text-teal-800 px-2 py-0.5 text-[10px] uppercase font-bold border border-teal-200 tracking-wider">
                        Optimal Choice
                      </span>
                    )}
                  </div>

                  {/* Old Regime Card */}
                  <div className="bg-white p-3.5 rounded-none border border-slate-200 shadow-sm flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Old Tax Regime</span>
                      <span className="text-lg font-mono font-bold text-slate-700">
                        ₹{oldRegimeTax.toLocaleString("en-IN")}
                      </span>
                    </div>
                    {oldRegimeTax <= newRegimeTax && (
                      <span className="bg-teal-50 text-teal-800 px-2 py-0.5 text-[10px] uppercase font-bold border border-teal-200 tracking-wider">
                        Optimal Choice
                      </span>
                    )}
                  </div>
                </div>

                {taxSavings > 0 && (
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-300 text-xs text-amber-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#9D6638] shrink-0" />
                    <span>
                      Save <strong>₹{taxSavings.toLocaleString("en-IN")}</strong> on Direct Taxes by choosing the New Tax Regime.
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-[10px] text-slate-400 leading-tight">
                  Calculators provide indicative estimations for budgetary planning. Actual liabilities depend on precise deductions, capital gains, corporate pools, and financial classifications. Reach out to our advisors for customized structuring audits.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
