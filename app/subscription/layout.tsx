import Footer from "@/components/layout/footer"
import SubscriptionNavBar from "./subscription-navbar"

interface SubscriptionLayoutProps {
    children?: React.ReactNode
  }
  
  export default async function SubscriptionLayout({
    children,
  }: SubscriptionLayoutProps) {
  
    return (
      <div className="flex min-h-screen flex-col space-y-6">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <SubscriptionNavBar  />
          </div>
        </header>
        {children}
        <Footer  />
      </div>
    )
  }