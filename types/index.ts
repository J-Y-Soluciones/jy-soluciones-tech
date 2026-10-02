export interface ProjectDemo {
  id: string;
  title: string;
  category: string;
  description: string;
  badges: string[];
  demoUrl: string;
  suggestedCredentials?: {
    user: string;
    pass: string;
  };
  whatsappText: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: string;
}
