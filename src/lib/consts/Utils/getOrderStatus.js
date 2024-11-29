import React from 'react'

const getOrderStatus = (status) => {
    switch(status){
        case 'PLACED':
            return (
                <span className='capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100'>
                    {status.replaceAll('_','').toLowerCase()}
                </span>
            )
            case 'SHIPPED':
                return (
                    <span className='capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100'>
                        {status.replaceAll('_','').toLowerCase()}
                    </span>
                )
                case 'DELIVERED':
                    return (
                        <span className='capitalize py-1 px-2 rounded-md text-xs text-purple-600 bg-purple-100'>
                            {status.replaceAll('_','').toLowerCase()}
                        </span>
                    )
                case 'CANCLED':
                    return (
                        <span className='capitalize py-1 px-2 rounded-md text-xs text-red-600 bg-red-100'>
                            {status.replaceAll('_','').toLowerCase()}
                        </span>
                    )
                    case 'PROCESSING':
                        return (
                            <span className='capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100'>
                                {status.replaceAll('_','').toLowerCase()}
                            </span>
                        )
                        default:
                            return (
                                <span className='capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100'>
                                    {status.replaceAll('_','').toLowerCase()}
                                </span>
                            )
    }
}

export default getOrderStatus