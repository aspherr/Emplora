const status = ({record}) => {
  return (
    <div className='≈ bg-base-200 rounded item-center justify-center p-2 mt-2'>
        <span className={` ${ record.status === 'active'
        ? 'text-green-600'
        : record.status === 'on leave'
        ? 'text-yellow-500'
        : record.status === 'terminated'
        ? 'text-red-600'
        : 'text-gray-500'
        }`}>
        {record.status}
        </span>
    </div>
  );
}

export default status;
