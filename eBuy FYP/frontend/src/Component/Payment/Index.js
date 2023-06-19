import axios from 'axios';
import React from 'react'
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


const Index = () => {

    const stripePromise = loadStripe('pk_test_51KL7RNA9AoZgJPE6zSNaQX2BCiD62j3XBhjdtpMb3U1B05Bv5RipIokn6E8qP2nApLNfN4DEISe9Qf9KXZqC4vQw003IHAAs7q');




  return (
        <Elements stripe={stripePromise}>
            <CheckOutForm/>
        </Elements>


  )
}

export default Index