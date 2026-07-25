import StatItem from './StatItem';
import stats from '../../data/stats';

export default function StatsSection() {
  return (
    <section className="section-py bg-ph-gradient">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
