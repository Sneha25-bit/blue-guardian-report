
import React, { useState } from "react";
import { Ambulance, Phone, Plus, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface EmergencyContact {
  id: string;
  name: string;
  number: string;
}

const EmergencyContacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [personalContacts, setPersonalContacts] = useState<EmergencyContact[]>([]);

  const handleAddContact = () => {
    if (name.trim() && number.trim()) {
      const newContact: EmergencyContact = {
        id: Date.now().toString(),
        name: name.trim(),
        number: number.trim()
      };
      
      setPersonalContacts([...personalContacts, newContact]);
      setName("");
      setNumber("");
      setIsOpen(false);
    }
  };

  const handleRemoveContact = (id: string) => {
    setPersonalContacts(personalContacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8 text-safewatch-900">Emergency Contacts</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="text-red-600" />
                National Emergency Numbers
              </CardTitle>
              <CardDescription>
                Important contact numbers for emergencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Police</TableCell>
                    <TableCell>
                      <a href="tel:100" className="text-blue-600 hover:underline flex items-center gap-1">
                        <Phone className="h-4 w-4" /> 100
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Fire Department</TableCell>
                    <TableCell>
                      <a href="tel:101" className="text-blue-600 hover:underline flex items-center gap-1">
                        <Phone className="h-4 w-4" /> 101
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ambulance</TableCell>
                    <TableCell>
                      <a href="tel:102" className="text-blue-600 hover:underline flex items-center gap-1">
                        <Ambulance className="h-4 w-4" /> 102
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Women Helpline</TableCell>
                    <TableCell>
                      <a href="tel:1091" className="text-blue-600 hover:underline flex items-center gap-1">
                        <Phone className="h-4 w-4" /> 1091
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Disaster Management</TableCell>
                    <TableCell>
                      <a href="tel:108" className="text-blue-600 hover:underline flex items-center gap-1">
                        <Phone className="h-4 w-4" /> 108
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User />
                Personal Emergency Contacts
              </CardTitle>
              <CardDescription>
                Add your personal emergency contacts for quick access
              </CardDescription>
            </CardHeader>
            <CardContent>
              {personalContacts.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Number</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {personalContacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>
                          <a href={`tel:${contact.number}`} className="text-blue-600 hover:underline flex items-center gap-1">
                            <Phone className="h-4 w-4" /> {contact.number}
                          </a>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleRemoveContact(contact.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center p-4 text-gray-500">
                  No personal contacts added yet.
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 w-full">
                    <Plus className="h-4 w-4" />
                    Add Personal Contact
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Contact Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="number">Phone Number</Label>
                    <Input 
                      id="number" 
                      type="tel" 
                      placeholder="Enter phone number" 
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button onClick={handleAddContact}>Save Contact</Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmergencyContacts;
