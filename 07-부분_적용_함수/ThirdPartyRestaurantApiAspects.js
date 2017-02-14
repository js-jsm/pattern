Aop.around(
    // 반환값을 수정해야 할 함수
    'restaurantApi',

    //  반환값을 수정하는 함수
    function addGetRestaurantsNearConference(targetInfo) {
        'use strict';

        // ThirdParty.restaurantApi()가 반환한 원본 API
         var api = Aop.next.call(this, targetInfo);

         // API에 추가할 함수
         function getRestaurantsNearConference(cuisine) {
             return api.getRestaurantsWithinRadius('서울 특별시 구로구', 2.0, cuisine);
         }

         // 없으면 이 함수를 추가한다.
         api.getRestaurantsNearConference = api.getRestaurantsNearConference || getRestaurantsNearConference;

         // 수정한 API를 반환.
         return api;
    },

    // 반환값을 수정해야 할 함수의 이름공간
    ThirdParty
);