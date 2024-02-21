import OAuth from "./oauth"
export default function Login(req) {
  const {searchParams:{from}} = req
  return (
    <div>
      <form action={"/auth/login?type=email&from="+from} method="post">
        <label htmlFor="email">Email</label>
        <input name="email" /> 
        <hr/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <hr/>
        <button>登录</button>
        <hr/>
        <button formAction="/auth/logout">退出</button>
        
      </form>
      <OAuth></OAuth>
    </div>
  )
}

