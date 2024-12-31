import { useState } from 'react'

export default function SecureLoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleUsernameBlur = () => {
    if (!username) {
      setUsernameError('Username is required')
    } else {
      setUsernameError('')
    }
  }

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError('Password is required')
    } else {
      setPasswordError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) {
      setError('Please fill in all fields')
      if (!username) setUsernameError('Username is required')
      if (!password) setPasswordError('Password is required')
      return
    }
    // Here you would typically send the login data to your backend
    console.log('Login attempt', { username, password })
    // Reset form and error states
    setUsername('')
    setPassword('')
    setError('')
    setUsernameError('')
    setPasswordError('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#34495E]">SecureLogin</h2>
          {error && <p className="text-red-500 text-14 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-[#34495E] text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#34495E] leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={handleUsernameBlur}
            />
            {usernameError && <p className="text-red-500 text-14 mt-1">{usernameError}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-[#34495E] text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#34495E] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur}
            />
            {passwordError && <p className="text-red-500 text-14 mt-1">{passwordError}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-18"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}