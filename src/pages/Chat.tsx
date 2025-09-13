import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Waves, Send, User, Bot, Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your WaveTalk AI assistant. I can help you explore and analyze ARGO oceanographic data. Ask me about ocean temperatures, salinity levels, or any marine science questions!",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]");
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand you're asking about oceanographic data. To provide specific insights from ARGO floats, I would need to connect to the ARGO database. This is a mock response - in the full implementation, I would analyze real ocean data to answer your question about " + userMessage.content.toLowerCase() + ".",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-64 bg-card border-r transform transition-transform duration-300 ease-in-out z-30 md:translate-x-0 md:static md:inset-0`}>
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <Waves className="h-6 w-6 text-primary" />
            <span className="font-semibold">WaveTalk</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </Button>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-sm text-muted-foreground mb-3">OCEAN TOPICS</h3>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-sm">
              Temperature Profiles
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Salinity Data
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Float Locations
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Climate Patterns
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-card/50 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Ocean AI Assistant</span>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">Connected to ARGO Network</span>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"} space-x-2`}>
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback>
                      {message.role === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <Card className={`p-3 ${message.role === "user" ? "bg-primary text-primary-foreground ml-2" : "bg-muted mr-2"}`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <span className={`text-xs mt-1 block ${message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </Card>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-2 mr-2">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <Card className="p-3 bg-muted">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t bg-card/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about ocean temperatures, ARGO float data, marine patterns..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputMessage.trim() || isLoading}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Ask me about oceanographic data, ARGO floats, or marine science topics
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Chat;