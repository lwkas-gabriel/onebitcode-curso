import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://github.com/lwkas-gabriel.png"
        name="Lucas Gabriel"
        bio="Frontend developer @ Mandarin."
        email="lwkas@lwkas.com"
        phone="+5585988998899"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}