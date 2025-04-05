
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  incidentLocation: string;
  incidentDate: Date | undefined;
  incidentTime: string;
  incidentDescription: string;
  suspectDescription: string;
  isVictim: boolean;
  victimName?: string;
  victimContact?: string;
  victimRelation?: string;
  fileUpload?: FileList;
};

const CrimeReportForm = () => {
  const [date, setDate] = useState<Date>();
  const [isVictim, setIsVictim] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    defaultValues: {
      isVictim: true,
    }
  });
  
  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', data);
      setIsSubmitting(false);
      
      toast({
        title: "Report Submitted",
        description: "Your crime report has been successfully submitted. A case number will be sent to you shortly.",
      });
    }, 1500);
  };

  // Watch the isVictim field
  const watchIsVictim = watch("isVictim");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-safewatch-900">Incident Details</h2>
        
        {/* Incident Location */}
        <div className="space-y-2">
          <Label htmlFor="incidentLocation" className="text-sm font-medium">
            Location of Incident<span className="text-red-500">*</span>
          </Label>
          <Input
            id="incidentLocation"
            placeholder="Enter the full address where the incident occurred"
            {...register("incidentLocation", { required: "Location is required" })}
            className={cn(errors.incidentLocation && "border-red-500")}
          />
          {errors.incidentLocation && (
            <p className="text-sm text-red-500">{errors.incidentLocation.message}</p>
          )}
        </div>
        
        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date Picker */}
          <div className="space-y-2">
            <Label htmlFor="incidentDate" className="text-sm font-medium">
              Date of Incident<span className="text-red-500">*</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                    errors.incidentDate && "border-red-500"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setValue("incidentDate", selectedDate);
                  }}
                  initialFocus
                  disabled={(date) => date > new Date()}
                />
              </PopoverContent>
            </Popover>
            {errors.incidentDate && (
              <p className="text-sm text-red-500">{errors.incidentDate.message}</p>
            )}
          </div>
          
          {/* Time Picker */}
          <div className="space-y-2">
            <Label htmlFor="incidentTime" className="text-sm font-medium">
              Time of Incident<span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="incidentTime"
                type="time"
                {...register("incidentTime", { required: "Time is required" })}
                className={cn(errors.incidentTime && "border-red-500")}
              />
              <Clock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            </div>
            {errors.incidentTime && (
              <p className="text-sm text-red-500">{errors.incidentTime.message}</p>
            )}
          </div>
        </div>
        
        {/* Incident Description */}
        <div className="space-y-2">
          <Label htmlFor="incidentDescription" className="text-sm font-medium">
            Incident Description<span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="incidentDescription"
            placeholder="Please provide a detailed description of what happened..."
            {...register("incidentDescription", { 
              required: "Description is required",
              minLength: {
                value: 20,
                message: "Please provide at least 20 characters"
              }
            })}
            className={cn("resize-none h-32", errors.incidentDescription && "border-red-500")}
          />
          {errors.incidentDescription ? (
            <p className="text-sm text-red-500">{errors.incidentDescription.message}</p>
          ) : (
            <p className="text-xs text-gray-500">
              Include all relevant details about the incident. The more information you provide, the better we can assist.
            </p>
          )}
        </div>
        
        {/* Suspect Information */}
        <div className="space-y-2">
          <Label htmlFor="suspectDescription" className="text-sm font-medium">
            Suspect Description (if any)
          </Label>
          <Textarea
            id="suspectDescription"
            placeholder="Describe any suspects (appearance, behavior, distinguishing features, vehicle, etc.)"
            {...register("suspectDescription")}
            className="resize-none h-24"
          />
          <p className="text-xs text-gray-500">
            Include details such as height, weight, clothing, hair color, and any distinguishing features.
          </p>
        </div>
        
        {/* File Upload */}
        <div className="space-y-2">
          <Label htmlFor="fileUpload" className="text-sm font-medium">
            Upload Evidence (Optional)
          </Label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:bg-gray-50 transition-colors">
            <Input
              id="fileUpload"
              type="file"
              multiple
              accept="image/*,video/*"
              className="hidden"
              {...register("fileUpload")}
            />
            <Label htmlFor="fileUpload" className="cursor-pointer flex flex-col items-center">
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-600">Click to upload</span>
              <span className="text-xs text-gray-500 mt-1">
                Images or videos related to the incident (Max 50MB)
              </span>
            </Label>
          </div>
        </div>
      </div>
      
      {/* Victim Information Section */}
      <div className="space-y-4 pt-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-safewatch-900">Victim Information</h2>
        
        {/* Is Victim Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="isVictim"
            checked={watchIsVictim}
            onCheckedChange={(checked) => {
              setValue("isVictim", checked === true);
              setIsVictim(checked === true);
            }}
          />
          <Label htmlFor="isVictim" className="text-sm font-medium cursor-pointer">
            I am the victim of this crime
          </Label>
        </div>
        
        {/* Conditional Victim Information Fields */}
        {!watchIsVictim && (
          <div className="space-y-4 bg-gray-50 p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="victimName" className="text-sm font-medium">
                  Victim's Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="victimName"
                  placeholder="Full name of the victim"
                  {...register("victimName", { 
                    required: !watchIsVictim ? "Victim's name is required" : false 
                  })}
                  className={cn(errors.victimName && "border-red-500")}
                />
                {errors.victimName && (
                  <p className="text-sm text-red-500">{errors.victimName.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="victimContact" className="text-sm font-medium">
                  Victim's Contact<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="victimContact"
                  placeholder="Phone number or email"
                  {...register("victimContact", { 
                    required: !watchIsVictim ? "Victim's contact is required" : false 
                  })}
                  className={cn(errors.victimContact && "border-red-500")}
                />
                {errors.victimContact && (
                  <p className="text-sm text-red-500">{errors.victimContact.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="victimRelation" className="text-sm font-medium">
                Your Relationship to Victim<span className="text-red-500">*</span>
              </Label>
              <Input
                id="victimRelation"
                placeholder="e.g., Family member, Friend, Witness"
                {...register("victimRelation", { 
                  required: !watchIsVictim ? "Relationship to victim is required" : false 
                })}
                className={cn(errors.victimRelation && "border-red-500")}
              />
              {errors.victimRelation && (
                <p className="text-sm text-red-500">{errors.victimRelation.message}</p>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Submission */}
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-safewatch-700 hover:bg-safewatch-800 text-white py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Crime Report"}
        </Button>
        <p className="text-xs text-center text-gray-500 mt-2">
          By submitting this report, you confirm that all information provided is accurate to the best of your knowledge.
        </p>
      </div>
    </form>
  );
};

export default CrimeReportForm;
