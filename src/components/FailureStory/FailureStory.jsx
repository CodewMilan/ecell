import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Quote } from 'lucide-react';

const ShareFailureStory = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    story: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const quote = {
    text: "It's fine to celebrate success but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
    title: "Microsoft Co-founder"
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.story) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const emailData = {
        to: 'ecell@bmsit.in',
        subject: `New Failure Story Submission from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          
          Story:
          ${formData.story}
        `
      };
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Email data to be sent:', emailData);
      
      setSubmitStatus('success');
      setFormData({ email: '', name: '', story: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 border-2" style={{ borderColor: '#FD7722', backgroundColor: '#FFF5F0' }}>
            <Quote className="w-5 h-5 mr-2" style={{ color: '#FD7722' }} />
            <span style={{ color: '#FD7722', fontFamily: 'Sora, sans-serif', fontWeight: '600' }}>Business Wisdom</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mt-8 mb-6 leading-tight">
           <span style={{ color: '#000000' }}>Share Your</span>  <span style={{ color: '#FD7722' }}>Failure</span> <span style={{ color: '#000000' }}>Story</span> 
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Sora, sans-serif' }}>
            Transform your setbacks into comebacks. Your story could be the inspiration someone needs to persevere.
          </p>
        </div>

       <div className="flex flex-col gap-16">


  {/* Quote Section - On top (mobile) or left (lg) */}
  <div className="lg:basis-2/5 w-full">
    <div className="bg-gray-50 p-12 border-2 border-gray-200 sticky top-8">
      <div className="relative">
        <Quote className="absolute -top-6 -left-6 w-16 h-16 opacity-10" style={{ color: '#FD7722' }} />
        <blockquote className="text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-10 text-gray-800 font-light">
          {quote.text}
        </blockquote>
        <div className="space-y-3">
          <cite className="text-2xl md:text-3xl font-bold block" style={{ color: '#FD7722', fontFamily: 'Sora, sans-serif' }}>
            {quote.author}
          </cite>
          <div className="text-lg text-gray-600 font-semibold" style={{ fontFamily: 'Sora, sans-serif' }}>
            {quote.title}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Form Section */}
  <div className="lg:basis-3/5 w-full">
    <div className="bg-white border-2 border-gray-200 p-12">
      <div className="space-y-10">

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name Input */}
          <div className="space-y-3">
            <label className="block text-lg font-bold text-gray-800 uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-200"
              placeholder="Enter your full name"
              style={{ fontFamily: 'Sora, sans-serif' }}
            />
          </div>

          {/* Email Input */}
          <div className="space-y-3">
            <label className="block text-lg font-bold text-gray-800 uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-200"
              placeholder="your@email.com"
              style={{ fontFamily: 'Sora, sans-serif' }}
            />
          </div>
        </div>

        {/* Story Textarea */}
        <div className="space-y-3">
          <label className="block text-lg font-bold text-gray-800 uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
            Your Failure Story *
          </label>
          <div className="relative">
            <textarea
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              rows={10}
              className="w-full px-6 py-4 border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-200 resize-none"
              placeholder="Share your entrepreneurial journey... What challenge did you face? What lessons did you learn? How did this experience shape your business approach?"
              style={{ fontFamily: 'Georgia, serif' }}
            />
            <div className="absolute bottom-4 right-6 text-sm text-gray-500" style={{ fontFamily: 'Sora, sans-serif' }}>
              {formData.story.length} characters
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full py-5 px-8 font-bold text-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center border-2"
          style={{
            backgroundColor: isSubmitting ? '#9CA3AF' : '#FD7722',
            borderColor: isSubmitting ? '#9CA3AF' : '#FD7722',
            color: 'white',
            fontFamily: 'Sora, sans-serif'
          }}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin h-6 w-6 border-b-2 border-white mr-3"></div>
              Sharing Your Story...
            </>
          ) : (
            <>
              <Send className="w-6 h-6 mr-3" />
              Share My Story
            </>
          )}
        </button>

     
  



                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 px-6 py-4">
                    <div className="flex items-center text-green-800">
                      <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                      <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px' }}>
                        Thank you for sharing your story! It will inspire others on their entrepreneurial journey.
                      </span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 px-6 py-4">
                    <div className="flex items-center text-red-800">
                      <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                      <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px' }}>
                        Please fill in all required fields and try again.
                      </span>
                    </div>
                  </div>
                )}

              </div>
            </div>

            
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShareFailureStory;