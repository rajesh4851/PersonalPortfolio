import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Github, Linkedin, Twitter, Dribbble, Send } from "lucide-react";
import { ContactInfo } from "@/lib/types";

// Contact form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

// Sample contact info
const contactInfo: ContactInfo = {
  email: "contact@example.com",
  location: "San Francisco, CA",
  social: {
    github: "#",
    linkedin: "#",
    twitter: "#",
    dribbble: "#"
  }
};

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div 
        className="container mx-auto max-w-5xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center"
          {...fadeInAnimation(0.1)}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          {...fadeInAnimation(0.2)}
        >
          Have a project in mind or want to discuss opportunities? Feel free to reach out.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <motion.div 
            className="md:col-span-2 space-y-6"
            {...fadeInAnimation(0.3)}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-muted-foreground font-medium">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-muted-foreground font-medium">Location</h4>
                    <p className="text-primary">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                {contactInfo.social.github && (
                  <a href={contactInfo.social.github} className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <Github className="text-primary" />
                  </a>
                )}
                {contactInfo.social.linkedin && (
                  <a href={contactInfo.social.linkedin} className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <Linkedin className="text-primary" />
                  </a>
                )}
                {contactInfo.social.twitter && (
                  <a href={contactInfo.social.twitter} className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <Twitter className="text-primary" />
                  </a>
                )}
                {contactInfo.social.dribbble && (
                  <a href={contactInfo.social.dribbble} className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <Dribbble className="text-primary" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-3"
            {...fadeInAnimation(0.4)}
          >
            <Card className="bg-muted border-muted">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                {...field} 
                                className="bg-background border-muted focus:border-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your email" 
                                type="email"
                                {...field} 
                                className="bg-background border-muted focus:border-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Message subject" 
                              {...field} 
                              className="bg-background border-muted focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              {...field} 
                              rows={5}
                              className="bg-background border-muted focus:border-primary resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto flex items-center gap-2"
                      disabled={form.formState.isSubmitting}
                    >
                      <span>Send Message</span>
                      <Send size={16} />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
