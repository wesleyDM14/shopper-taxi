import { FaStar } from "react-icons/fa";

interface StarRankingProps {
    rating: number,
    maxStars?: number,
}

const RankingStar = ({ rating, maxStars = 5 }: StarRankingProps) => {
    return (
        <div style={{ display: 'flex', gap: '2px' }}>
            {
                Array.from({ length: maxStars }, (_, index) => (
                    <FaStar
                        key={index}
                        size={15}
                        color={index < rating ? '#FFD700' : '#C0C0C0'}
                    />
                ))
            }
        </div>
    )
}

export default RankingStar;