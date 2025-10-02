import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">
          Cancellation & Refund Policy
        </h1>

        <Card className="max-w-3xl mx-auto bg-card/50 border-border/50 shadow-lg p-6">
          <CardContent className="space-y-6 text-foreground/80">
            <p>
              **Rift Wear** believes in helping its customers as far as
              possible, and has therefore a liberal cancellation policy.
            </p>
            <p>
              Under this policy: Cancellations will be considered only if the
              request is made within 3-5 days of placing the order. However, the
              cancellation request may not be entertained if the orders have
              been communicated to the vendors/merchants and they have initiated
              the process of shipping them.
            </p>
            <p>
              **Rift Wear** does not accept cancellation requests for perishable
              items like flowers, eatables etc. However, refund/replacement can
              be made if the customer establishes that the quality of the
              product delivered is not good.
            </p>
            <p>
              In case of receipt of damaged or defective items please report the
              same to our Customer Service team. The request will, however, be
              entertained once the merchant has checked and determined the same
              at his own end. This should be reported within 3-5 days of receipt
              of the products.
            </p>
            <p>
              In case you feel that the product received is not as shown on the
              site or as per your expectations, you must bring it to the notice
              of our customer service within 3-5 days of receiving the product.
              The Customer Service Team after looking into your complaint will
              take an appropriate decision.
            </p>
            <p>
              In case of complaints regarding products that come with a warranty
              from manufacturers, please refer the issue to them.
            </p>
            <p>
              In case of any Refunds approved by **Rift Wear**, it’ll take 9-15
              days for the refund to be processed to the end customer.
            </p>
          </CardContent>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" /> Back to Home
              </Link>
            </Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationRefundPolicy;
