import { CardContent,Card, Typography, Box } from "@mui/material";
import React from "react";

function TermsandConditions (){
    return(
    
        <div className="px-5">
        <div>
        <Typography variant="h4" pb={4} pt={2} textAlign="center" >Terms & Conditions</Typography>  
          <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}} display="flex" alignItems="center" >
          <CardContent textAlign="justify">
           <ul>
           <li >Intellectual property (IP) ownership</li>
           <li >Acceptable uses of the site</li>
           <li >Prohibited uses of the site</li>
           <li >User submissions</li>
           <li >Disclaimers/liability limitations</li>
           <li >Limited warranties</li>
           <li >Links to privacy policies</li>
           <li >Choice of law and venue</li>
           <li>Representations and warranties of user</li>
            </ul>
        </CardContent>
        </Card>
       </div>
       
       <div >
       <Typography variant="h5" pb={4} pt={2} textAlign="center"  >When creating terms of service, you should also make sure to avoid the following three common pitfalls:</Typography>  

        <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <ol >
           <li >Copying another site's provisions, as they may be inappropriate or irrelevant for your e-commerce business.</li>
           <li >Your company not abiding by its own rules and responsibilities, especially concerning user privacy or the sale of email addresses to third parties.</li>
           <li >Using outdated provisions that fail to account for new website features or changes in the law.</li>
           </ol>
           </CardContent>
           </Card>
       </div>
       
       <div>
        <Typography variant="h4" pb={4} pt={2} textAlign="center"  >Privacy Policy</Typography>  
        <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>A privacy policy is a document that states how your e-commerce business will gather,
            use, and manage customers' data. It needs to explain which personal information 
            is collected, how it's used, and how it's protected.</p>
           <p>Every website that collects personal information from visitors is required by privacy regulations like the have a privacy policy.
                These contracts may provide some liability protection
               in the event of a dispute over the way your business handles personal information.
                Privacy policies are a helpful tool for promoting trust and transparency between your business and its customers.</p>
       </CardContent>
       </Card>
       </div>
       
        <div>
        <Typography variant="h4" pb={4} pt={2} textAlign="center"  >User Agreements</Typography> 
        
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>A user agreement is any contract between a website user and the site's owner or operator. 
               These e-commerce contracts can be end-user license agreements (EULAs), terms of service/terms and conditions, or privacy policies. 
               They outline the rights and obligations of both parties. Agreements for users provide the conditions under which a user may use your website. 
               This limits your company's legal obligations and explains the circumstances required for termination.</p>
               </CardContent>
           </Card>
          </div>
       
       
          <div>
          <Typography variant="h4" pb={4} pt={2} textAlign="center" >Return Policy</Typography> 
    
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>Customers will inevitably return purchased products, so your e-commerce business needs a return policy. There is no legal obligation for e-commerce companies to accept returns,
                which means a return policy is discretional. Nevertheless, it's a good idea to offer returns. It means you can account for defective products and build trust between buyers and sellers. 
                Because it isn't a legal document like a privacy policy or terms of service, a return policy can be relatively simple. It should address the following issues:</p>
           <ul >
           <li >Length of return policy</li>
           <li >Condition of returned items</li>
           <li >Eligibility of returns</li>
           <li>Which party pays for shipping</li>
           </ul>
           </CardContent>
           </Card>
          </div>
       
       
          <div>
          <Typography variant="h4" pb={4} pt={2} textAlign="center"  >Subscription Agreement</Typography> 
         
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>If your e-commerce business is subscription-based, you will also need to create and manage a subscription agreement that addresses the purchasing and delivery of goods. 
               While these provisions can be incorporated into the terms of service, it's best to keep them in a separate e-commerce</p>
           <p>A subscription agreement should cover the specific issues that can occur with your company's sale of its products or services. Some provisions to consider covering include:</p>
           <ul >
           <li >Website membership agreements</li>
           <li >Electronic signatures</li>
           <li >Consumer protection law compliance</li>
           <li >Information licensing</li>
           <li >Disclaimers/waivers</li>
           <li >Shipping policies</li>
           <li >Export controls</li>
           <li >Product warranties</li>
           <li >Sales tax</li>
           </ul>
           </CardContent>
           </Card>
          </div>
       
          <div>
          <Typography variant="h4" pb={4} pt={2} textAlign="center"  >Non-disclosure agreement (NDA)</Typography>
    
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>Many e-commerce businesses use independent contractors. If you do, you should have NDAs in place. NDA is a contract that prohibits the sharing of confidential information. 
               It prevents proprietary information about your business from being leaked to the public.</p>
               </CardContent>
               </Card>
           </div>
       
           <div>
           <Typography variant="h4" pb={4} pt={2} textAlign="center"  >Vendor Agreement</Typography>
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>They are the contracts made between your e-commerce business and your suppliers. These contracts are the foundation of your business. 
               They facilitate the sale and purchase of your company's goods or services.</p>
           </CardContent>
           </Card>
           </div>
       
       
           <div>
           <Typography variant="h4" pb={4} pt={2} textAlign="center"  >Some common elements of a vendor contract include:</Typography>
          
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <ul >
           <li >Description of goods and services</li>
           <li >Agreed prices or method of pricing</li>
           <li >Terms of delivery</li>
           <li >Term of payment</li>
           <li >Indemnity clause</li>
           <li >Termination clause</li>
           <li>Ownership clause</li>
           <li>Confidentiality clause</li>
       </ul>
       </CardContent>
       </Card>
       </div>
       
       <div>
       <Typography variant="h4" pb={4} pt={2} textAlign="center"  >Service-level agreement (SLA)</Typography>

         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>Your e-commerce business will need a web host and software service providers. For that, 
               you'll need to negotiate and manage SLA.</p>
               </CardContent>
               </Card>
           </div>
       
       
           <div>
           <Typography variant="h4" pb={4} pt={2} textAlign="center"  >A service-level agreement will:</Typography>
        
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
          <ul >
           <li >Define the level and quality of the service to be rendered</li>
           <li >Define how service level and quality will be measured</li>
           <li >Detail remedies and penalties for subpar service</li>
           </ul>
           </CardContent>
           </Card>
           </div>
       
           <div>
           <Typography variant="h4" pb={4} pt={2} textAlign="center" >Master service agreement (MSA)</Typography>
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>IT is a contract between two parties that lists the terms that will govern future agreements and transactions.</p>
           <p>In the case of e-commerce, your business would need an MSA if you would like to have a long-term business relationship with web hosts or software service providers. 
               The SLAs that you sign with these companies can be included in an MSA. This can streamline the negotiation process,
                while still allowing for modifications should there be a change in circumstances.</p>
           </CardContent>
           </Card>
           </div>
       
           <div>
           <Typography variant="h4" pb={4} pt={2} textAlign="center"  >Warranty</Typography>
    
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
           <p>A warranty can help you attract customers. Warranties help make shoppers feel comfortable and confident about purchasing your products.</p>
           </CardContent>
           </Card>
           </div>
       
       
       <div className="pb-5">
       <Typography variant="h4" pb={4} pt={2} textAlign="center"  >Warranties address four issues that are important to consumers:</Typography>
 
         <Card sx={{ bgcolor: ' rgb(254, 247, 243)'}}>
          <CardContent textAlign="justify">
          <ol >
           <li >Product Protection: Most customers have certain expectations about the products they purchase and the issues the seller will cover. By offering a warranty, your e-commerce business can set expectations and deliver on promises to consumers.</li>
           <li >Product Quality: For expensive purchases, customers expect a high level of product quality. A warranty demonstrates that your company is willing to stand behind its products and will make consumers feel confident about your brand.</li>
           <li >Customer Service: A poor customer service experience can lead to lost customers and a negative view of your brand. Extended warranties, especially in conjunction with a product protection company partnership, should be able to provide consumers with excellent support that will positively impact your brand.</li>
           <li>Flexibility: Inflexible return policies can prevent customers from making purchases or lead to unhappy customers if they purchase a product that does not meet their needs. By offering warranties that allow easy cancellation or transferability, your e-commerce business provides consumers with valuable flexibility.</li>
           
           </ol>
           </CardContent>
           </Card>
           </div>
       
       
       
       
       
       </div>
       
       
        )
       
       }
       export default TermsandConditions;

    
    

