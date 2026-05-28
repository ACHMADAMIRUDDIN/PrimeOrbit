import React from "react";
import image from "../../../assets/image";
import {
  Package,
  Truck,
  Navigation,
  Settings,
  MapPin,
  Search,
} from "lucide-react";

const TrackingView = () => {
  return (
    <div className="flex flex-col gap-[20px] font-work text-black w-full min-w-0 max-w-full">
      <div className="flex flex-col xl:flex-row items-stretch gap-[24px]">
        <div className="flex-1 flex flex-col gap-[20px]">
          <div className="w-full h-[400px] xl:h-[576px] rounded-[24px] relative overflow-hidden shadow-sm border border-gray-100">
            <img
              src={image.container}
              alt="Map"
              className="absolute inset-0 w-full h-full object-cover opacity-90 contrast-[1.01] z-0"
            />

            <div className="absolute left-[20%] top-[40%] z-10">
              <div className="w-[17px] h-[17px] rounded-full bg-[#ffcd51] border-[2.6px] border-white shadow-md"></div>
            </div>

            <div className="absolute left-[60%] top-[30%] z-10">
              <div className="w-[17px] h-[17px] rounded-full bg-[#ffcd51] border-[2.6px] border-white shadow-md"></div>
            </div>

            <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-10">
              <path
                d="M 200,230 Q 400,100 650,180"
                fill="none"
                stroke="#2a2a7c"
                strokeWidth="2.6"
                strokeDasharray="6,6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[26px] shadow-sm border border-gray-100">
              <div className="flex flex-col gap-[8px]">
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#2a2a7c] text-white flex items-center justify-center">
                  <Package size={24} />
                </div>
                <span className="text-[14px] leading-[120%] text-[#2a2a7c] font-medium">
                  Total Shipments
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="text-[20px] font-medium leading-[140%] text-[#1e2939]">
                  789 Packages
                </span>
                <span className="text-[12px] leading-[120%] text-[#6a7282]">
                  Recent shipment totals
                </span>
              </div>
            </div>

            <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[26px] shadow-sm border border-gray-100">
              <div className="flex flex-col gap-[8px]">
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#2a2a7c] text-white flex items-center justify-center">
                  <Truck size={24} />
                </div>
                <span className="text-[14px] leading-[120%] text-[#2a2a7c] font-medium">
                  Delivered Orders
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="text-[20px] font-medium leading-[140%] text-[#1e2939]">
                  652 Deliveries
                </span>
                <span className="text-[12px] leading-[120%] text-[#6a7282]">
                  Total this month
                </span>
              </div>
            </div>

            <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[26px] shadow-sm border border-gray-100">
              <div className="flex flex-col gap-[8px]">
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#2a2a7c] text-white flex items-center justify-center">
                  <Truck size={24} style={{ transform: "scaleX(-1)" }} />
                </div>
                <span className="text-[14px] leading-[120%] text-[#2a2a7c] font-medium">
                  Active Deliveries
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="text-[20px] font-medium leading-[140%] text-[#1e2939]">
                  137 In-Transit
                </span>
                <span className="text-[12px] leading-[120%] text-[#6a7282]">
                  Ready for route analysis
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[380px] rounded-[24px] bg-white p-[16px_14px] flex flex-col gap-[26px] shadow-sm border border-gray-100 shrink-0 h-fit">
          <div className="flex items-center gap-[12px]">
            <div className="w-[48px] h-[48px] rounded-[16px] bg-[#f5f5f5] flex items-center justify-center text-gray-600">
              <Search size={24} />
            </div>
            <h3 className="text-[18px] font-medium leading-[120%] tracking-[-0.01em] text-[#252b37]">
              Package being checked
            </h3>
          </div>

          <div className="flex flex-col gap-[20px] text-[12px] text-[#808899]">
            <div className="w-full rounded-[20px] bg-[#f5f5f5] p-[12px] flex items-center justify-between">
              <div className="flex items-center gap-[16px]">
                <div className="w-[34px] h-[34px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center">
                  <Truck size={16} />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="leading-[120%]">Tracking ID</span>
                  <span className="text-[18px] font-medium text-black leading-[120%] tracking-[-0.01em]">
                    #C023
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="h-[24px] rounded-[4px] bg-[#e7f7ee] border border-[#0dac53]/15 px-[8px] flex items-center justify-center text-[#0dac53]">
                  Delivered
                </div>
              </div>
            </div>

            <div className="w-full rounded-[20px] bg-[#f5f5f5] p-[12px] flex flex-col gap-[20px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[34px] h-[34px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center">
                    <Truck size={16} />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="leading-[120%]">Tracking ID</span>
                    <span className="text-[18px] font-medium text-black leading-[120%] tracking-[-0.01em]">
                      #C024
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="h-[24px] rounded-[4px] bg-[#ccf1f8] border border-[#bceef8] px-[8px] flex items-center justify-center text-black">
                    Transit
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-black/10"></div>

              <div className="flex flex-col gap-[8px] text-[14px]">
                <div className="flex justify-between items-center">
                  <span>Package arrived on</span>
                  <span className="font-semibold text-black">
                    25 February 2025
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Time</span>
                  <span className="font-semibold text-black">18:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total item</span>
                  <span className="font-semibold text-black">2 items</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-black/10"></div>

              <div className="flex flex-col gap-[12px] text-[14px] text-black relative pl-[8px]">
                <div className="absolute left-[13px] top-[10px] bottom-[20px] w-[2px] bg-gray-200 z-0"></div>

                <div className="flex flex-col gap-[4px] relative z-10">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[12px] h-[12px] rounded-full bg-[#e1e3e5] flex items-center justify-center">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#b2b6bc]"></div>
                    </div>
                    <span className="font-semibold leading-[120%]">
                      Package being checked
                    </span>
                  </div>
                  <div className="flex flex-col pl-[24px] gap-[4px] text-[12px] text-gray-500">
                    <span>February 19, 2025 • 18:49 PM</span>
                    <span>Jakarta, Indonesia</span>
                  </div>
                </div>

                <div className="flex flex-col gap-[4px] relative z-10">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[12px] h-[12px] rounded-full bg-[#ebebf5] flex items-center justify-center">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#2a2a7c]"></div>
                    </div>
                    <span className="font-semibold leading-[120%]">
                      Package in transit
                    </span>
                  </div>
                  <div className="flex flex-col pl-[24px] gap-[4px] text-[12px] text-gray-500">
                    <span>February 19, 2025 • 21:29 PM</span>
                    <span>Purwakarta, Indonesia</span>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-[48px] bg-[#2a2a7c] text-white py-[16px] text-[16px] hover:bg-[#2a2a7c]/90 transition-colors mt-[10px]">
                Assign Driver
              </button>
            </div>

            <div className="w-full rounded-[20px] bg-[#f5f5f5] p-[12px] flex items-center justify-between">
              <div className="flex items-center gap-[16px]">
                <div className="w-[34px] h-[34px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center">
                  <Truck size={16} />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="leading-[120%]">Tracking ID</span>
                  <span className="text-[18px] font-medium text-black leading-[120%] tracking-[-0.01em]">
                    #C025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="h-[24px] rounded-[4px] bg-[#e7f7ee] border border-[#0dac53]/15 px-[8px] flex items-center justify-center text-[#0dac53]">
                  Delivered
                </div>
              </div>
            </div>

            <div className="w-full rounded-[20px] bg-[#f5f5f5] p-[12px] flex items-center justify-between">
              <div className="flex items-center gap-[16px]">
                <div className="w-[34px] h-[34px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center">
                  <Truck size={16} />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="leading-[120%]">Tracking ID</span>
                  <span className="text-[18px] font-medium text-black leading-[120%] tracking-[-0.01em]">
                    #C026
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="h-[24px] rounded-[4px] bg-[#e7f7ee] border border-[#0dac53]/15 px-[8px] flex items-center justify-center text-[#0dac53]">
                  Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-[14px] bg-white p-[23px_20px] flex flex-col gap-[24px] shadow-sm border border-gray-100">
        <div className="flex items-center justify-between px-[16px]">
          <h2 className="text-[18px] font-medium text-[#1e2939] tracking-[-0.01em]">
            Recent Shipments
          </h2>
          <button className="flex items-center gap-[7px] px-[10px] py-[7px] rounded-[7px] bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.09)] text-[14px] text-[#1e2939] hover:bg-gray-50">
            <Settings size={14} />
            <span>Filter</span>
          </button>
        </div>

        <div className="w-full rounded-[12px] border border-gray-200/80 overflow-x-auto">
          <div className="min-w-[900px] flex flex-col bg-white">
            <div className="w-full h-[48px] bg-[#fafafa] border-b border-gray-200/80 flex items-center px-[24px] gap-[20px] text-[12px] font-semibold text-[#6b7282] uppercase tracking-wider">
              <div className="w-[15%]">ORDER ID</div>
              <div className="w-[20%]">ORIGIN</div>
              <div className="w-[20%]">DESTINATION</div>
              <div className="w-[15%]">STATUS</div>
              <div className="w-[12%]">ETA</div>
              <div className="w-[18%]">PROGRES</div>
            </div>

            <div className="w-full flex flex-col text-[14px] text-[#1e2939]">
              <div className="flex items-center gap-[20px] px-[24px] py-[16px] border-b border-gray-100">
                <div className="w-[15%] font-medium text-[#191919]">
                  #ORD-2301
                </div>
                <div className="w-[20%] text-[#6b7280]">New York, NY</div>
                <div className="w-[20%] text-[#6b7280] truncate">
                  Los Angeles, CA
                </div>
                <div className="w-[15%]">
                  <div className="inline-flex items-center justify-center h-[28px] rounded-full bg-[#e0f2fe] px-[14px] text-[#0369a1] text-[13px] font-medium">
                    In Transit
                  </div>
                </div>
                <div className="w-[12%] text-[#191919]">2 hours</div>
                <div className="w-[18%]">
                  <div className="w-full max-w-[140px] h-[8px] rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-[#ffcd51] w-[70%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[20px] px-[24px] py-[16px] border-b border-gray-100">
                <div className="w-[15%] font-medium text-[#191919]">
                  #ORD-2302
                </div>
                <div className="w-[20%] text-[#6b7280]">Chicago, IL</div>
                <div className="w-[20%] text-[#6b7280] truncate">Miami, FL</div>
                <div className="w-[15%]">
                  <div className="inline-flex items-center justify-center h-[28px] rounded-full bg-[#dcfce7] px-[14px] text-[#15803d] text-[13px] font-medium">
                    Delivered
                  </div>
                </div>
                <div className="w-[12%] text-[#191919]">Completed</div>
                <div className="w-[18%]">
                  <div className="w-full max-w-[140px] h-[8px] rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-[#ffcd51] w-[100%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[20px] px-[24px] py-[16px] border-b border-gray-100">
                <div className="w-[15%] font-medium text-[#191919]">
                  #ORD-2303
                </div>
                <div className="w-[20%] text-[#6b7280]">Houston, TX</div>
                <div className="w-[20%] text-[#6b7280] truncate">
                  Seattle, WA
                </div>
                <div className="w-[15%]">
                  <div className="inline-flex items-center justify-center h-[28px] rounded-full bg-[#e0f2fe] px-[14px] text-[#0369a1] text-[13px] font-medium">
                    In Transit
                  </div>
                </div>
                <div className="w-[12%] text-[#191919]">6 hours</div>
                <div className="w-[18%]">
                  <div className="w-full max-w-[140px] h-[8px] rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-[#ffcd51] w-[40%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[20px] px-[24px] py-[16px] border-b border-gray-100">
                <div className="w-[15%] font-medium text-[#191919]">
                  #ORD-2304
                </div>
                <div className="w-[20%] text-[#6b7280]">Boston, MA</div>
                <div className="w-[20%] text-[#6b7280] truncate">
                  San Francisco, CA
                </div>
                <div className="w-[15%]">
                  <div className="inline-flex items-center justify-center h-[28px] rounded-full bg-[#fee2e2] px-[14px] text-[#b91c1c] text-[13px] font-medium">
                    Delayed
                  </div>
                </div>
                <div className="w-[12%] text-[#191919]">12 hours</div>
                <div className="w-[18%]">
                  <div className="w-full max-w-[140px] h-[8px] rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-[#ffcd51] w-[30%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[20px] px-[24px] py-[16px]">
                <div className="w-[15%] font-medium text-[#191919]">
                  #ORD-2305
                </div>
                <div className="w-[20%] text-[#6b7280]">Phoenix, AZ</div>
                <div className="w-[20%] text-[#6b7280] truncate">
                  Denver, CO
                </div>
                <div className="w-[15%]">
                  <div className="inline-flex items-center justify-center h-[28px] rounded-full bg-[#fef3c7] px-[14px] text-[#d97706] text-[13px] font-medium">
                    Pending
                  </div>
                </div>
                <div className="w-[12%] text-[#191919]">Not Started</div>
                <div className="w-[18%]">
                  <div className="w-full max-w-[140px] h-[8px] rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-[#ffcd51] w-[0%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingView;
