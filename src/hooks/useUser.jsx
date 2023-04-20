import { useAuth0 } from '@auth0/auth0-react'

const  useUser = () => {
  const { user } = useAuth0()

  const checkUser = async () => {
    const response = await fetch("http://localhost:3001//user/check", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user.email, name: user.name, picture: user.picture })
    })

    return await response.json()
  }
  return (
    checkUser
  )
  
}

export default useUser;