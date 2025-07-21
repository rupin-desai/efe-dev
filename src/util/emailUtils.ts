import emailjs from '@emailjs/browser';

export const sendEmail = async ({
  serviceId,
  templateId,
  userId,
  templateParams,
}: {
  serviceId: string;
  templateId: string;
  userId: string;
  templateParams: Record<string, any>;
}) => {
  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, userId);
    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
};