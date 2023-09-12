/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

type Props = {
  className: string;
};

const Cases: React.FC<Props> = ({ className }) => {


  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bold text-dark">Cases</h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
         
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-2">
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-success"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              Create FireStone Logo
            </a>
            <span className="text-muted fw-semibold d-block">
              Due in 2 Days
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-success fs-8 fw-bold">New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-primary"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              Stakeholder Meeting
            </a>
            <span className="text-muted fw-semibold d-block">
              Due in 3 Days
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-primary fs-8 fw-bold">New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-warning"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              Scoping &amp; Estimations
            </a>
            <span className="text-muted fw-semibold d-block">
              Due in 5 Days
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-warning fs-8 fw-bold">New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-primary"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              KPI App Showcase
            </a>
            <span className="text-muted fw-semibold d-block">
              Due in 2 Days
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-primary fs-8 fw-bold">New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-danger"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              Project Meeting
            </a>
            <span className="text-muted fw-semibold d-block">
              Due in 12 Days
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-danger fs-8 fw-bold">New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-success"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              Customers Update
            </a>
            <span className="text-muted fw-semibold d-block">
              Due in 1 week
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-success fs-8 fw-bold">New</span>
        </div>
        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { Cases };
