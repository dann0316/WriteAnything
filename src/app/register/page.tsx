export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center pt-40 text-3xl">
            <form method="POST" action="/api/auth/signup" className="flex flex-col items-center justify-center gap-5">
                <input name="name" type="text" placeholder="이름" className="shadow"/> 
                <input name="email" type="text" placeholder="이메일" className="shadow"/>
                <input name="password" type="password" placeholder="비번" className="shadow"/>
                <button type="submit">id/pw 가입요청</button>
            </form>
        </div>
    )
}