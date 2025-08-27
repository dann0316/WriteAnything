
import pencil from "../../../public/pencil.png";


export default function SideBanner() {

    // const [direction] = useState('left');
    const direction = ['left', 'right']

    return (
        <div className="hidden lg:block w-1/4">

            {
                direction.map((a,i) => {
                    return (
                        <div key={a} className={`fixed ${a}-85 top-40 w-60 h-80 bg-pink-100 shadow-lg rounded-lg p-10 flex flex-col items-center justify-between`}>

                    <div className="text-lg font-semibold uppercase">{a} Side Banner</div>
                    <div>
                        <img src={pencil.src} alt="" width={130} />
                    </div>
                    <p className="mt-2 text-gray-600 text-2xl">이 자리에 차지할 사람 구함ㅋ</p>
            </div>
                    )
                })
            }
            
        </div>
    );
}

// 1단계: 질문 분석 → direction을 상태(state)로 관리할 필요가 있는가?

// ✅ 상태로 해야 하는 경우:
// 사용자의 행동(클릭 등)이나 외부 이벤트(API 등)에 따라 값이 변할 가능성이 있는 경우

// ❌ 상태가 필요 없는 경우:
// 초기 고정값으로 렌더링만 할 경우. 변하지 않는 데이터는 굳이 상태로 만들 필요 없음!

// ✔️ 2단계: 현재 구조 분석

// js
// 복사
// 편집
// const direction = ['left', 'right'];
// 이건 컴포넌트가 렌더링될 때 한 번만 참조되고, 그 이후로 값이 바뀌지 않음.

// ❗ 즉, state로 만들 필요 없음. 그냥 상수 배열로도 충분!

// ✔️ 3단계: 검증
// useState(['left', 'right'])로 선언하더라도, 값이 바뀌지 않는다면 성능적으로 오히려 낭비.
// ➡️ 불필요한 상태 관리는 코드 복잡도만 높임.