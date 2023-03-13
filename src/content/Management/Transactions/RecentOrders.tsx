import { Card } from '@mui/material';
import { CryptoOrder } from '@/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Customer Pay',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: '4x4oXy...TJGcJQ',
      sourceName: 'Solana Account',
      sourceDesc: '2f8WJ...cVGdE',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'SOL',
      currency: '$'
    },
    {
      id: '2',
      orderDetails: 'Fiat Deposit',
      orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      orderID: '23M...G8K',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1131',
      amountCrypto: 6,
      amount: 873,
      cryptoCurrency: 'SOL',
      currency: '$'
    },
    {
      id: '3',
      orderDetails: 'Loan',
      orderDate: subDays(new Date(), 5).getTime(),
      status: 'failed',
      orderID: '2GjD...XMQ',
      sourceName: 'Solpe Lending',
      sourceDesc: '4fgD...XM45',
      amountCrypto: 10000,
      amount: 10018.186,
      cryptoCurrency: 'USDC',
      currency: '$'
    },
    {
      id: '4',
      orderDetails: 'Fiat Deposit',
      orderDate: subDays(new Date(), 55).getTime(),
      status: 'completed',
      orderID: 'QJF...LGM',
      sourceName: 'Bank Account',
      sourceDesc: 'QdfF...Lf32',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '5',
      orderDetails: 'Loan',
      orderDate: subDays(new Date(), 56).getTime(),
      status: 'pending',
      orderID: '5Kj...Uuj5',
      sourceName: 'Solpe Lending',
      sourceDesc: '7TrEX...kZUk',
      amountCrypto: 82343292234343,
      amount: 10000,
      cryptoCurrency: 'BONK',
      currency: '$'
    },
    {
      id: '6',
      orderDetails: 'Customer Pay',
      orderDate: subDays(new Date(), 33).getTime(),
      status: 'completed',
      orderID: '6RS....VQ',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 20.12,
      amount: 20,
      cryptoCurrency: 'USDC',
      currency: '$'
    },
    {
      id: '7',
      orderDetails: 'Customer Payback',
      orderDate: new Date().getTime(),
      status: 'pending',
      orderID: '4gh9...JS',
      sourceName: 'Solana Pay',
      sourceDesc: '44dg...Jd5fg',
      amountCrypto: 30,
      amount: 29.24,
      cryptoCurrency: 'USDT',
      currency: '$'
    },
    {
      id: '8',
      orderDetails: 'Paypal Withdraw',
      orderDate: subDays(new Date(), 22).getTime(),
      status: 'completed',
      orderID: 'W67C...1KR',
      sourceName: 'Paypal Account',
      sourceDesc: '*** 1231',
      amountCrypto: 20,
      amount: 345443,
      cryptoCurrency: 'wETH',
      currency: '$'
    },
    {
      id: '9',
      orderDetails: 'Solpe Rewards',
      orderDate: subDays(new Date(), 11).getTime(),
      status: 'completed',
      orderID: '6s3s...gs4H',
      sourceName: 'Solana Pay',
      sourceDesc: '3KjP...7tzh8',
      amountCrypto: 0.7845,
      amount: 18.34,
      cryptoCurrency: 'Sol',
      currency: '$'
    },
    {
      id: '10',
      orderDetails: 'Wallet Transfer',
      orderDate: subDays(new Date(), 123).getTime(),
      status: 'failed',
      orderID: '4sdf...4d4rf',
      sourceName: 'Wallet Transfer',
      sourceDesc: "John's Solana Wallet",
      amountCrypto: 76,
      amount: 234123,
      cryptoCurrency: 'Sol',
      currency: '$'
    }
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
