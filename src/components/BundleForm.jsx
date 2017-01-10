import React from 'react';

const BundleForm = () => (
  <div className="modal-body ">
    <div className="title">
      New Bundle
    </div>
    <div className="description">
      Bundle content
    </div>
    <form action="">
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div className="input-group">
        <label htmlFor="licenses_type">Licenses Type</label>
        <input type="text" name="licenses_type" />
      </div>
      <div className="input-group">
        <label htmlFor="country">Country</label>
        <input type="text" name="country" />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
      </div>
      <div className="text-center">
        <div className="button">
          Create
        </div>
      </div>
    </form>
  </div>
);

export default BundleForm;
