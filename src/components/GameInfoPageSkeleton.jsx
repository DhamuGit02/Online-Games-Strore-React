import Skeleton from '@mui/material/Skeleton';
import './GameInfoPageSkeleton.css'

function GameInfoPageSkeleton() {
    return (
        <div style={{
            width: '90%',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            rowGrap: '10px',
            backgroundColor: 'slategray',
            // marginInline: '2%'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '2px',
                alignItems: 'center'
            }}>
                <Skeleton variant='rectangular' width={380} height={280} sx={{ backgroundColor: 'lightgray', borderRadius: '5px', marginInline: '2%' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', backgroundColor: 'lightgray', marginInline: '2%' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', backgroundColor: 'lightgray', marginInline: '2%' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', backgroundColor: 'lightgray', marginInline: '2%' }} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '5px'
            }}>
                <Skeleton variant='rectangular' width={380} height={200} sx={{ backgroundColor: 'lightgray', borderRadius: '5px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1.5rem', backgroundColor: 'lightgray', marginInline: '2%' }} />
                <Skeleton variant="text" sx={{ fontSize: '3rem', backgroundColor: 'lightgray', marginInline: '2%' }} />
                <Skeleton variant='rectangular' width={380} height={50} sx={{ backgroundColor: 'lightgray', borderRadius: '5px', marginInline: '2%' }} />
                <Skeleton variant='rectangular' width={380} height={50} sx={{ backgroundColor: 'lightgray', borderRadius: '5px', marginInline: '2%' }} />
                <Skeleton variant='rectangular' width={380} height={50} sx={{ backgroundColor: 'lightgray', borderRadius: '5px', marginInline: '2%' }} />
            </div>
            <div style={{
                width: '78%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                rowGap: '5px'
            }}>
                <Skeleton variant="text" sx={{ fontSize: '1.5rem', backgroundColor: 'lightgray', width: '300px' }} />
                <Skeleton className='spec-skeleton' variant='rectangular' width={580} height={400} sx={{ backgroundColor: 'lightgray', borderRadius: '5px' }} />
            </div>
        </div>
    )
}

export default GameInfoPageSkeleton