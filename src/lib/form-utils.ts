export interface InquiryFormData {
  fullName: string;
  contactNumber: string;
  businessName: string;
  businessType: string;
  message: string;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  village: string;
  district: string;
  state: string;
  farmSize: string;
  mainCrops: string;
  fpoStatus: string;
  additionalInfo: string;
}

export const validateInquiryForm = (data: InquiryFormData): string[] => {
  const errors: string[] = [];
  
  if (!data.fullName.trim()) errors.push("Full name is required");
  if (!data.contactNumber.trim()) errors.push("Contact number is required");
  if (!data.businessName.trim()) errors.push("Business name is required");
  if (!data.businessType || data.businessType === "Select business type") {
    errors.push("Please select a business type");
  }
  
  return errors;
};

export const validateRegistrationForm = (data: RegistrationFormData): string[] => {
  const errors: string[] = [];
  
  if (!data.firstName.trim()) errors.push("First name is required");
  if (!data.lastName.trim()) errors.push("Last name is required");
  if (!data.contactNumber.trim()) errors.push("Contact number is required");
  if (!data.village.trim()) errors.push("Village/City is required");
  if (!data.district.trim()) errors.push("District is required");
  if (!data.state || data.state === "Select your state") {
    errors.push("Please select your state");
  }
  if (!data.farmSize.trim()) errors.push("Farm size is required");
  if (!data.mainCrops.trim()) errors.push("Main crops are required");
  if (!data.fpoStatus || data.fpoStatus === "Select an option") {
    errors.push("Please select FPO status");
  }
  
  return errors;
};

export const submitInquiryForm = async (data: InquiryFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Simulate API call - replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would send this data to your backend
    console.log("Inquiry submitted:", data);
    
    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you within 24 hours."
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to submit inquiry. Please try again or contact us directly."
    };
  }
};

export const submitRegistrationForm = async (data: RegistrationFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Simulate API call - replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would send this data to your backend
    console.log("Registration submitted:", data);
    
    return {
      success: true,
      message: "Registration submitted successfully! Our team will contact you within 24 hours for verification."
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to submit registration. Please try again or contact us directly."
    };
  }
};
