import styles from "./refund.module.css";
import Link from "next/link";
import { Logo } from "@/_components/logo/logo";
import { Navbar } from "@/_components/navbar/navbar";
import { Footer } from "@/_components/footer/footer";

export default function Refund() {
  return (
    <>
      <div className={styles.navarea}>
        <Logo />
        <Navbar />
      </div>
      <div className={styles.spc}></div>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.title}>Return and Refund Policy</div>
          <div className={styles.subtitle}>Last updated: May 04, 2024</div>
          <div className={styles.text}>
            Thank you for shopping at Marketing Fitness. If, for any reason, You
            are not completely satisfied with a purchase We invite You to review
            our policy on refunds and returns. This Return and Refund Policy has
            been created with the help of the Return and Refund Policy
            Generator.
          </div>
          <div className={styles.text}>
            The following terms are applicable for any products that You
            purchased with Us.
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>Interpretation and Definitions</div>
          <div className={styles.text}>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </div>
          <div className={styles.text}>
            For the purposes of this Return and Refund Policy:
          </div>
          <div className={styles.text}>
            Company (referred to as either &quot;the Company&quot;,
            &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement)
            refers to Roofing Insights LLC, 7600 Boone Ave N Suite 65, Brooklyn
            Park, 55428.
          </div>
          <div className={styles.text}>
            Goods refer to the items offered for sale on the Service.
          </div>
          <div className={styles.text}>
            Orders mean a request by You to purchase Goods from Us.
          </div>
          <div className={styles.text}>
            Subscription means an automatic monthly charge for repetitive usage
            of the Goods
          </div>
          <div className={styles.text}>Service refers to the Website.</div>
          <div className={styles.text}>
            Website refers to Marketing Fitness, accessible from
            https://mymarketingfitness.com
          </div>
          <div className={styles.text}>
            You means the individual accessing or using the Service, or the
            company, or other legal entity on behalf of which such individual is
            accessing or using the Service, as applicable.
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>Your Order Cancellation Rights</div>
          <div className={styles.text}>
            You are entitled to cancel Your Order any time. There is no deadline
            for cancelling an Order.
          </div>
          <div className={styles.text}>
            In order to exercise Your right of cancellation, You must inform Us
            of your decision by means of a clear statement. You can inform us of
            your decision by:
          </div>
          <div className={styles.text}>
            • By email: info@mymarketingfitness.com
          </div>
          <div className={styles.text}>
            We will NOT reimburse You for your first Order. Refund can be issued
            for any unused period within Your ongoing Subscription starting the
            second Subscription period.
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>Conditions for Refunds</div>
          <div className={styles.text}>
            Only regular priced Goods may be refunded. Unfortunately, Goods on
            sale cannot be refunded. This exclusion may not apply to You if it
            is not permitted by applicable law.
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>Contact Us</div>
          <div className={styles.text}>
            If you have any questions about our Returns and Refunds Policy,
            please contact us:
          </div>
          <div className={styles.text}>
            • By email: info@mymarketingfitness.com
          </div>
        </div>
        <br></br>
        <div className={styles.section}>
          <Link href="/" className={styles.btn}>
            Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
