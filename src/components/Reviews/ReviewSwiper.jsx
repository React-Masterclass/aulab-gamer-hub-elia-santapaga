import { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import useProfile from '../../hooks/useProfile';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';
import supabase from '../../supabase/client';
import getProfileImg from '../../utils/getProfileImg';
import formatMessageDate from '../../utils/formatMessageDate';

export default function ReviewSwiper({ game }) {
  const [comments, setComments] = useState([]);
  const { profile } = useProfile();

  console.log(game);

  const getComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*, profile: profiles(*)')
      .eq('game_id', game.id);
    if (error) {
      alert(error.message);
    } else {
      setComments(data);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="mt-4 review-swiper-anim">
      <div>
        <h2 className="shadow-neon text-center fs-1 my-0">User Reviews</h2>

        <div className="col-12 center-flex mt-3">
          <Link to={profile ? `/game/${game.id}/review` : '/login'}>
            <button type="button" className="game-list-button">
              Write review
            </button>
          </Link>
        </div>

        {comments.length !== 0 ? (
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {comments.map((comment) => (
              <SwiperSlide key={comment.id}>
                <div class="snip1390 center-flex">
                  <div className="avatar-review-box rounded-pill overflow-hidden center-flex ms-2">
                    <img
                      src={getProfileImg(comment.profile.avatar_url)}
                      alt="profile"
                      className="img-avatar-review"
                    />
                  </div>
                  <figcaption>
                    <h4 className="text-white mt-3">
                      {comment.profile.username}
                    </h4>
                    <p className="text-white fs-6 mb-4">
                      {formatMessageDate(comment.created_at)}
                    </p>
                    <div className="blockquote text-light fs-6 rounded py-3 px-2 m-0 box-shadow-gold">
                      <p>"{comment.review_content}"</p>
                    </div>
                  </figcaption>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <h3 className="text-center text-light my-4">No reviews yet!</h3>
        )}
      </div>
    </div>
  );
}