import React from "react";
import InputField from "../components/shared/InputField";
import Button from '../components/shared/Button'

export default function ComposeMessage() {

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Compose Message</h1>
      <form className="space-y-4">
        <InputField label='To' placeholder="Recipient's email" type='text' />
        <InputField label='Subject' placeholder="Message subject" type='text' />
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button type="button" className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">Cancel</Button>
          <Button type='submit' className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Send</Button>
        </div>
      </form>
    </div>
  );
}
