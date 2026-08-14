import StatItem from './StatItem';
import stats from '../../data/stats';

export default function StatsSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 ph-stats-grid">
          {stats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
