import React from 'react';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import image from '../../../assets/image';

const shipmentMilestones = [
  { label: '', active: true },
  { label: '', active: true },
  { label: 'STEP 3', active: false },
  { label: 'STEP 4', active: false },
];

const trackingTimeline = [
  { label: 'Current Location', location: 'Indonesia', time: '12.00', active: true },
  { label: 'Departure Waypoint', location: 'Singapore', time: '08.00', active: false },
  { label: 'Arrival Location', location: 'Singapore', time: '03.00', active: false },
  { label: 'Current Location', location: 'Indonesia', time: '12.00', active: false },
];

const OverlayImageCard = ({ title, description, imageSrc, imageAlt, imageClassName = 'object-center' }) => (
  <article className="relative h-[260px] overflow-hidden rounded-[22px] sm:h-[292px] lg:h-[266px] xl:h-[286px]">
    <img
      src={imageSrc}
      alt={imageAlt}
      className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0)_24%,rgba(17,17,17,0.18)_54%,rgba(17,17,17,0.84)_100%)]" />
    <div className="absolute inset-x-0 bottom-0 h-[112px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(36,36,36,0.32)_18%,rgba(36,36,36,0.82)_100%)] backdrop-blur-[7px]" />

    <div className="relative flex h-full items-end p-[22px] sm:p-[26px]">
      <div className="max-w-[338px] text-white">
        <h3 className="font-sans text-[18px] font-medium leading-[115%] tracking-[-0.04em] sm:text-[20px]">
          {title}
        </h3>
        <p className="mt-[10px] text-[12px] leading-[138%] text-white/74 sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  </article>
);

const JourneyDot = ({ active }) => (
  <span
    aria-hidden="true"
    className={`block h-[9px] w-[9px] rounded-full ${
      active ? 'bg-[#4f88e7] ring-[3px] ring-[#edf3ff]' : 'bg-[#2d2d2d]'
    }`}
  />
);

const TrackingCard = () => (
  <article className="h-[260px] rounded-[22px] bg-[#f5f5f5] p-[14px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:h-[292px] sm:p-[16px] lg:h-[266px] xl:h-[286px]">
    <div className="rounded-[14px] bg-[#fafafa] px-[14px] py-[11px]">
      <div className="flex items-center gap-[10px] text-[12px] text-[#999999]">
        <Search size={14} strokeWidth={2} />
        <span className="font-inter">Search</span>
      </div>
    </div>

    <div className="mt-[14px] flex items-center gap-[10px] px-[4px] font-inter text-[9px] font-medium uppercase tracking-[0.16em] text-[#717171] sm:text-[10px]">
      {shipmentMilestones.map((milestone, index) => (
        <React.Fragment key={`${milestone.label || 'dot'}-${index}`}>
          <div className="flex items-center gap-[8px]">
            <JourneyDot active={milestone.active} />
            {milestone.label ? <span className="whitespace-nowrap">{milestone.label}</span> : null}
          </div>
          {index < shipmentMilestones.length - 1 ? (
            <div className="h-px flex-1 border-t border-dashed border-[#bdbdbd]" />
          ) : null}
        </React.Fragment>
      ))}
    </div>

    <div className="mt-[14px] rounded-[18px] bg-white p-[16px] shadow-[0_10px_28px_rgba(15,23,42,0.04)] sm:p-[18px]">
      <div className="flex items-start justify-between gap-[18px]">
        <div>
          <p className="font-inter text-[10px] leading-none text-[#9f9f9f] sm:text-[11px]">Tracking ID</p>
          <p className="mt-[8px] font-inter text-[20px] font-medium leading-none tracking-[-0.05em] text-[#2d2d2d] sm:text-[22px]">
            #9876QWER
          </p>
        </div>

        <div className="text-right">
          <p className="font-inter text-[10px] leading-none text-[#9f9f9f] sm:text-[11px]">Estimate</p>
          <p className="mt-[8px] font-inter text-[20px] font-medium leading-none tracking-[-0.04em] text-[#2d2d2d] sm:text-[22px]">
            10 days
          </p>
        </div>
      </div>

      <div className="relative mt-[18px] space-y-[12px] pl-[18px] before:absolute before:left-[4px] before:top-[8px] before:h-[calc(100%-22px)] before:w-px before:bg-[#e4e4e4]">
        {trackingTimeline.map((stop, index) => (
          <div key={`${stop.label}-${index}`} className="relative flex items-start justify-between gap-[12px]">
            <span
              aria-hidden="true"
              className={`absolute left-[-18px] top-[6px] h-[8px] w-[8px] rounded-full ${
                stop.active ? 'bg-[#4f88e7]' : 'bg-[#d7d7d7]'
              }`}
            />

            <div>
              <p className="font-inter text-[9px] leading-[135%] text-[#a2a2a2] sm:text-[10px]">{stop.label}</p>
              <p className="mt-[2px] font-inter text-[11px] leading-[135%] text-[#2f2f2f] sm:text-[12px]">
                {stop.location}
              </p>
            </div>

            <div className="min-w-[52px] text-right">
              <p className="font-inter text-[11px] leading-[135%] text-[#2f2f2f] sm:text-[12px]">{stop.time}</p>
              <p className="mt-[2px] font-inter text-[9px] leading-[135%] text-[#a2a2a2] sm:text-[10px]">Time</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </article>
);

const LandingTestimonialsSection = () => {
  return (
    <section className="w-full bg-white px-4 py-[88px] text-[#2d2d2d] sm:px-6 md:px-[60px] md:py-[104px] xl:px-[80px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex flex-col justify-between gap-[24px] md:flex-row md:items-start">
          <h2 className="max-w-[510px] font-sans text-[38px] font-medium leading-[102%] tracking-[-0.065em] text-[#2d2d2d] sm:text-[46px] lg:text-[56px]">
            Smarter Routes,
            <br />
            Faster Delivery
          </h2>

          <p className="max-w-[352px] pt-[4px] font-inter text-[16px] leading-[140%] text-[#2d2d2d]/78 sm:text-[18px] lg:text-[20px]">
            Accelerate your operations with PrimeOrbit advanced logistics infrastructure designed
          </p>
        </div>

        <div className="mt-[38px] space-y-[14px] sm:mt-[44px]">
          <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-[1.25fr_1.04fr]">
            <OverlayImageCard
              title="Warehouse Management Solutions"
              description="Warehouse Management Solutions enables businesses to manage inventory, storage, and warehouse operations efficiently through a centralized..."
              imageSrc={image.warehouseOperations}
              imageAlt="Warehouse operations"
              imageClassName="object-[center_58%]"
            />

            <TrackingCard />
          </div>

          <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-[0.95fr_1.25fr]">
            <article className="flex h-[260px] flex-col justify-between rounded-[22px] bg-[#ffd464] px-[22px] py-[24px] sm:h-[292px] sm:px-[24px] sm:py-[28px] lg:h-[266px] xl:h-[286px] xl:px-[28px]">
              <div>
                <h3 className="max-w-[290px] font-sans text-[32px] font-medium leading-[100%] tracking-[-0.055em] text-black sm:text-[35px] xl:text-[38px]">
                  Next-Gen Smart Shipping Logistics Solutions
                </h3>

                <p className="mt-[14px] max-w-[285px] font-inter text-[13px] font-semibold leading-[128%] text-black/82 sm:text-[14px]">
                  Provides innovative logistics solutions for modern, efficient, and scalable supply chains - streamlining operations, improving shipment visibility, and enabling smarter logistics management.
                </p>
              </div>

              <div className="flex items-center gap-[12px] pt-[22px]">
                <button
                  type="button"
                  aria-label="Previous highlight"
                  className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-black/70 text-black"
                >
                  <ArrowLeft size={13} strokeWidth={2} />
                </button>

                <div className="h-px flex-1 bg-black/16" />

                <button
                  type="button"
                  aria-label="Next highlight"
                  className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-black/70 text-black"
                >
                  <ArrowRight size={13} strokeWidth={2} />
                </button>
              </div>
            </article>

            <OverlayImageCard
              title="Logistics Shipment Management"
              description="Logistics Shipment Management enables businesses to monitor, organize, and control shipments efficiently, providing real-time visibil..."
              imageSrc={image.deliveryDocs}
              imageAlt="Shipment management"
              imageClassName="object-[center_56%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonialsSection;
