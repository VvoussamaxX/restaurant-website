import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DeliveryForm = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  return (
    <div className="col-lg-4 col-md-6 form-group mt-3">
      <DatePicker
        selected={selectedDateTime}
        onChange={(date) => setSelectedDateTime(date)}
        showTimeSelect
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="Delivery Time"
        required
        className="form-control"
      />
      <div className="validate"></div>
    </div>
  );
};

export default DeliveryForm;

