# CH 7. 부분 적용 함수

## 7.1 단위 테스트
행사장 근처에 있는 음식점 위치를 알려주는 서드파티 API를 활용해
UI를 적용하여 음식점을 찾아주는 서비스 개발.

```js
// ThirdPartyRestaurantApi.js
var ThirdParty = ThirdParty || {};

ThirdParty.restaurantApi = function() {
    'use strict';
    return {
        // 주어진 주소(address) 기준 반경 radiusMiles 마일 이내에 위치한 
        // 원하는 요리(cuisine)를 먹을 수 있는 음식점 배열을 반환하는 프라미스 반환
        getRestaurantsWithinRadius : function(address, radiusMines, cuisine) {
            // 프라미스는 다음과 같은 객체의 배열로 귀결된다.
            // {
            //  name : "리차드홍", address : "서울 특별시 구로구"
            // }
        }
    }
}
```
api를 확장해 불필요한 고정된 변수값을 제거하고 cuisine만을 인자로 받는  
getRestaurantsNearConference(cuisine) 함수를 작성한다.


```js
// 예제 7-2 getRestaurantsNearConference 단위테스트
// ThirdPartyRestaurantApiAspects_tests.js
describe('ThirdParty.restaurantApi() 애스팩트', function() {
    var api = ThirdParty.restaurantApi();
    describe('getRestaurantsNearConference(cuisine)', function() {
        var returnFromUnderlyingFunction = '아무거',
            cuisine = '중화요리';
        beforeEach(function() {
            spyOn(api, 'getRestaurantsWithinRadius').and.returnValue(returnFromUnderlyingFunction);
        });

        it('올바른 인자로 getRestaurantsWithinRadius를 호출한다.', function() {
            api.getRestaurantsNearConference(cuisine);
            expect(api.getRestaurantsWithinRadius).toHaveBeenCalledWith('서울 특별시 구로구', 2.0, cuisine);
        });

        it('getRestaurantsWithinRadius로부터 받은 값을 반환한다.', function() {
            var ret = api.getRestaurantsNearConference(cuisine);
            expect(ret).toBe(returnFromUnderlyingFunction)
        });

    });
});
```

## 7.2 부분 적용 함수 만들기

```js
// ThirdPartyRestaurantApiAspects.js
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
```

## 7.3 부분 적용 함수와 커링 구별하기
부분 적용 함수가 커링(currying)과 밀접하게 연관된 개념이라는 사실을 그는 곧 깨닫는다. 사이가 너무 가깝다 보니 둘을 하나로 뭉뚱그려 이야기할 때도 잦다.

### 7.3.1 커링
커링은 인자를 여럿 취하는 함수를 인자 하나만 받는 함수 여러 개로 해제하는 기법이다.

첫 번째 호출부 getRestaurantsCurried(address) 실행이 끝나면 radius를 인자로 받아 또 다른 함수,  
즉 cuisine을 인자로 받는 함수를 반환하는 함수가 반환된다.  
가장 깊은 중첩 단계의 함수가 마지막으로 담을 내어주는 구조이다.

```js
// 코드
getRestaurantsWithinRadius(address, radius, cuisine);

// 커링
getRestaurantsCurried(address)(radius)(cuisine);

function getRestaurantsCurried(address) {
    var self = this;
    return function(radius) {
        return function(cuisine) {
            return self.getRestaurantsWithinRadius(address, radius, cuisine);
        }
    }
}
```

### 7.3.2 부분 적용 함수
부분 적용 함수는 이전 단계에서 생성된 커링 요소에 뭔가 더 보태서 
결국 이장 앞부분에서 소개했던 부분 적용 함수 버전과 기능이 같은 함수로 만든 것이다.

## 7.4 정리하기
부분 적용 함수 기법  
값이 불변인 상수 인자를 지닌 함수 호출부는 상수성(constancy)을 캡슐화하여 함수를 새로만드는게 좋다.

