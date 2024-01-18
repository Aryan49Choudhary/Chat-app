import React from 'react'
import Avatar from '../../assets/avatar.svg'
import Input from '../../components/Input'

const Dashboard = () => {
    const contacts = [
        {
            name: 'John',
            status: 'Available',
            img: Avatar,
        },
        {
            name: 'Alex',
            status: 'Available',
            img: Avatar,
        },
        {
            name: 'Alexander',
            status: 'Available',
            img: Avatar,
        },
        {
            name: 'Larry',
            status: 'Available',
            img: Avatar,
        },
    ]

  return (
    <div className="w-screen flex">
      <div className="w-[25%] bg-ternary bg-opacity-15 border border-black h-screen">
        <div className="flex items-center my-8 mx-14">
            <div className="border border-black p-[2px] rounded-full"><img src={Avatar} width={75} height={75} alt=''/></div>
            <div className="ml-8">
                <h3 className="text-2xl">Aryan</h3>
                <p className="text-lg font-light">My Account</p>
            </div>
        </div>
        <hr/>
        <div className=" mx-14 mt-10">
            <div className=" text-blue-600 text-lg">Messages</div>
            <div>
                {
                    contacts.map(({name, status, img}) => {
                        return(
                            <div className="flex items-center py-8 border-b border-b-gray-300">
                                <div className="cursor-pointer flex items-center">
                                    <div className=""><img src={img} width={60} height={60} alt=''/></div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold">{name}</h3>
                                        <p className="text-sm font-light text-gray-400">{status}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
      <div className="w-[50%] border border-black h-screen flex flex-col items-center">
        <div className="w-[75%] h-[80px] bg-ternary bg-opacity-15 my-14 rounded-full flex items-center px-14 shadow-md">
            <div className=' cursor-pointer'><img src={Avatar} width={60} height={60} alt='' /></div>
            <div className="ml-6 mr-auto">
                <h3 className=" text-lg">Alexander</h3>
                <p className="text-sm font-light text-gray-600">online</p>
            </div>
            <div className=' cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 9l5 -5" />
                <path d="M16 4l4 0l0 4" />
                </svg>
            </div>
        </div>
        <div className=' h-[75%] w-full overflow-y-scroll shadow-sm'>
            <div className='px-10 py-14'>
                <div className=' max-w-[350px] bg-ternary bg-opacity-15 rounded-b-xl rounded-tr-xl p-2 mb-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error velit tenetur id nemo quas nesciunt expedita veniam? Illo cupiditate facere asperiores placeat, obcaecati accusantium voluptate eveniet veritatis qui dolores laborum.
                </div>
                <div className='max-w-[350px] bg-primary bg-opacity-15 rounded-b-xl rounded-tl-xl ml-auto p-2 mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit iste asperiores animi nam rerum doloribus architecto molestias pariatur dignissimos. Quos sint obcaecati laboriosam molestiae beatae numquam, fuga impedit ut.
                </div>
                <div className=' max-w-[350px] bg-ternary bg-opacity-15 rounded-b-xl rounded-tr-xl p-2 mb-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error velit tenetur id nemo quas nesciunt expedita veniam? Illo cupiditate facere asperiores placeat, obcaecati accusantium voluptate eveniet veritatis qui dolores laborum.
                </div>
                <div className='max-w-[350px] bg-primary bg-opacity-15 rounded-b-xl rounded-tl-xl ml-auto p-2 mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit iste asperiores animi nam rerum doloribus architecto molestias pariatur dignissimos. Quos sint obcaecati laboriosam molestiae beatae numquam, fuga impedit ut.
                </div>
                <div className=' max-w-[350px] bg-ternary bg-opacity-15 rounded-b-xl rounded-tr-xl p-2 mb-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error velit tenetur id nemo quas nesciunt expedita veniam? Illo cupiditate facere asperiores placeat, obcaecati accusantium voluptate eveniet veritatis qui dolores laborum.
                </div>
                <div className='max-w-[350px] bg-primary bg-opacity-15 rounded-b-xl rounded-tl-xl ml-auto p-2 mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit iste asperiores animi nam rerum doloribus architecto molestias pariatur dignissimos. Quos sint obcaecati laboriosam molestiae beatae numquam, fuga impedit ut.
                </div>
                <div className=' max-w-[350px] bg-ternary bg-opacity-15 rounded-b-xl rounded-tr-xl p-2 mb-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error velit tenetur id nemo quas nesciunt expedita veniam? Illo cupiditate facere asperiores placeat, obcaecati accusantium voluptate eveniet veritatis qui dolores laborum.
                </div>
                <div className='max-w-[350px] bg-primary bg-opacity-15 rounded-b-xl rounded-tl-xl ml-auto p-2 mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit iste asperiores animi nam rerum doloribus architecto molestias pariatur dignissimos. Quos sint obcaecati laboriosam molestiae beatae numquam, fuga impedit ut.
                </div>
            </div>
        </div>
        <div className='p-14 w-full flex items-center'>
            <Input placeholder='Type a message...' className='w-[75%]' inputClassName=" border-0 shadow-md shadow-blue-400 rounded-50px focus: ring-0 focus: border-0 outline-none" />
            <div className=' ml-4 p-2 cursor-pointer bg-light rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
            </div>
            <div className=' ml-4 p-2 cursor-pointer bg-light rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
                </svg>
            </div>
        </div>
      </div>
      <div className="w-[25%] border border-black h-screen"></div>
    </div>
  )
}

export default Dashboard
