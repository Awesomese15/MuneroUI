class Order {
    constructor(
      customerName,
      firstName,
      lastName,
      referenceNo,
      deliveryChannel,
      contactNumber,
      smsMobileNumber,
      emailAddress,
      additionalParameters,
      countryCode,
      languageCode,
      orderDate,
      lineItems
    ) {
      this.customerName = customerName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.referenceNo = referenceNo;
      this.deliveryChannel = deliveryChannel;
      this.contactNumber = contactNumber;
      this.smsMobileNumber = smsMobileNumber;
      this.emailAddress = emailAddress;
      this.additionalParameters = additionalParameters || {};
      this.countryCode = countryCode;
      this.languageCode = languageCode;
      this.orderDate = orderDate;
      this.lineItems = lineItems || [];
    }
  }
  
  // ListItem class for individual line items
  
  
  export default Order;