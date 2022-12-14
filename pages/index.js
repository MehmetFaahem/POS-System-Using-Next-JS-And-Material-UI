import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Parent from '../components/parent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POS SYSTEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Parent>
        <div className='font-bold'>
          <div>
            <h1 className='text-4xl mb-10 '>Today's Engagement</h1>
            <div className='flex'>
              <div className='bg-neutral-900 mr-16 rounded-xl hover:shadow-4xl shadow-black'>
                <div className='p-10 pr-24 text-white'>
                  <h6 className='text-lg mb-1'>Today Sold</h6>
                  <h5 className='text-xl'>৳ 99,887</h5>
                </div>
              </div>
              <div className='bg-sky-900 rounded-xl hover:shadow-4xl shadow-black'>
                <div className='p-10 text-white'>
                  <h6 className='text-lg mb-1'>Today Expanse</h6>
                  <h5 className='text-xl'>৳ 60,986</h5>
                </div>
              </div>
              <div className='bg-orange-600 ml-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                <div className='p-10 text-white'>
                  <h6 className='text-lg mb-1'>Today Profit</h6>
                  <h5 className='text-xl'>৳ 30,986</h5>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className='text-4xl mb-10 mt-12'>In This Week</h1>
            <div className='flex'>
              <div className='bg-neutral-900 mr-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                <div className='p-10 text-white'>
                  <h6 className='text-lg mb-1'>Total Sold</h6>
                  <h5 className='text-xl'>৳ 99,887</h5>
                </div>
              </div>
              <div className='bg-sky-900 rounded-xl hover:drop-shadow-2xl shadow-black'>
                <div className='p-10 text-white'>
                  <h6 className='text-lg mb-1'>Total Expanse</h6>
                  <h5 className='text-xl'>৳ 60,986</h5>
                </div>
              </div>
              <div className='bg-orange-600 ml-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                <div className='p-10 text-white'>
                  <h6 className='text-lg mb-1'>Total Profit</h6>
                  <h5 className='text-xl'>৳ 30,986</h5>
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-4xl mb-10  mt-12'>In This Month</h1>
              <div className='flex'>
                <div className='bg-neutral-900 mr-16 rounded-xl hover:shadow-4xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Sold</h6>
                    <h5 className='text-xl'>৳ 99,887</h5>
                  </div>
                </div>
                <div className='bg-sky-900 rounded-xl hover:shadow-4xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Expanse</h6>
                    <h5 className='text-xl'>৳ 60,986</h5>
                  </div>
                </div>
                <div className='bg-orange-600 ml-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Profit</h6>
                    <h5 className='text-xl'>৳ 30,986</h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-4xl mb-10  mt-12'>In Total</h1>
              <div className='flex'>
                <div className='bg-neutral-900 mr-16 rounded-xl hover:shadow-4xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Profit</h6>
                    <h5 className='text-xl'>৳ 99,887</h5>
                  </div>
                </div>
                <div className='bg-sky-900 rounded-xl hover:shadow-4xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Recievable</h6>
                    <h5 className='text-xl'>৳ 60,986</h5>
                  </div>
                </div>
                <div className='bg-orange-600 ml-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Payable</h6>
                    <h5 className='text-xl'>৳ 30,986</h5>
                  </div>
                </div>
                <div className='bg-orange-600 ml-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Sold</h6>
                    <h5 className='text-xl'>৳ 30,986</h5>
                  </div>
                </div>
              </div>
              <div className='flex mt-16'>
                <div className='bg-neutral-900 mr-16 rounded-xl hover:shadow-4xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Cutomer</h6>
                    <h5 className='text-xl'>৳ 99,887</h5>
                  </div>
                </div>
                <div className='bg-sky-900 rounded-xl hover:shadow-4xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Supplier</h6>
                    <h5 className='text-xl'>৳ 60,986</h5>
                  </div>
                </div>
                <div className='bg-orange-600 ml-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Invoice</h6>
                    <h5 className='text-xl'>৳ 30,986</h5>
                  </div>
                </div>
                <div className='bg-orange-600 ml-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Product</h6>
                    <h5 className='text-xl'>৳ 30,986</h5>
                  </div>
                </div>
              </div>
              <div className='flex mt-16'>
                <div className='bg-neutral-900 mr-16 rounded-xl hover:shadow-4xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Returned</h6>
                    <h5 className='text-xl'>৳ 99,887</h5>
                  </div>
                </div>
                <div className='bg-sky-900 rounded-xl hover:shadow-4xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Expense</h6>
                    <h5 className='text-xl'>৳ 60,986</h5>
                  </div>
                </div>
                <div className='bg-orange-600 ml-16 rounded-xl hover:drop-shadow-2xl shadow-black'>
                  <div className='p-10 text-white'>
                    <h6 className='text-lg mb-1'>Total Purchase Cost</h6>
                    <h5 className='text-xl'>৳ 30,986</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parent>

    </div>
  )
}
