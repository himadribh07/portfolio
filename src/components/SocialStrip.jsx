import SocialTag from './SocialTag';

export default function SocialStrip() {
  return (
    <div className="tag-strip">
      <SocialTag rot={-3} name="GitHub" handle="@himadribh07" url="github.com/himadribh07" cta="Repos, OSS, experiments." />
      <SocialTag rot={2}  name="LinkedIn" handle="in/himadribhattacharya3" url="linkedin.com/in/himadribhattacharya3" cta="Work history & references." />
      <SocialTag rot={-2} name="Kaggle" handle="@himadri07" url="kaggle.com/himadri07" cta="Notebooks & datasets." />
      <SocialTag rot={3}  name="Email" handle="work.himadribhattacharya" url="work.himadribhattacharya@gmail.com" cta="Just say hi." />
    </div>
  );
}