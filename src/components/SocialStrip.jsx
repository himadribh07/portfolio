import SocialTag from './SocialTag';

export default function SocialStrip() {
  return (
    <div className="tag-strip">
      <SocialTag rot={-3} name="GitHub" handle="@himadri" url="github.com/himadri" cta="Repos, OSS, experiments." />
      <SocialTag rot={2}  name="LinkedIn" handle="in/himadri" url="linkedin.com" cta="Work history & references." />
      <SocialTag rot={-2} name="X / Twitter" handle="@himadri_ai" url="x.com/himadri_ai" cta="Notes & build logs." />
      <SocialTag rot={3}  name="Email" handle="blash@" url="blash@gmail.com" cta="Just say hi." />
    </div>
  );
}