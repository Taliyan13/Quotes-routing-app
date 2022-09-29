import QuoteForm from '../components/quotes/QuoteForm';
import { useEffect } from 'react';
//use use to change the History pages 
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';


const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = quoteData => {
      console.log(quoteData);
      sendRequest(quoteData);

      //navigate away from NewQuote page to AllQuotes page
      history.push('/quotes');
    }
    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm>
  };
  
  export default NewQuote;