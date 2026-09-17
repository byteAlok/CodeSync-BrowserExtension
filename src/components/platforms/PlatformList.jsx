import PlatformCard from "./PlatformCard";

function PlatformList() {
  const platforms = [
    {
      id: "leetcode",
      name: "LeetCode",
      username: "AlokMaurya",
      connected: true,
      solved: 247,
      total: 3200,
      easy: 120,
      medium: 91,
      hard: 36,
      synced: 244,
      pending: 3,
      lastSync: "2 minutes ago",
      syncStatus: "Synced",
      language: "C#",
    },
    {
      id: "hackerrank",
      name: "HackerRank",
      username: "AlokSDE",
      connected: true,
      solved: 84,
      total: 2000,
      easy: 42,
      medium: 31,
      hard: 11,
      synced: 82,
      pending: 2,
      lastSync: "18 minutes ago",
      syncStatus: "Synced",
      language: "C#",
    },
    {
      id: "geeksforgeeks",
      name: "GeeksforGeeks",
      username: "alokmaurya",
      connected: true,
      solved: 42,
      total: 5000,
      easy: 19,
      medium: 16,
      hard: 7,
      synced: 41,
      pending: 1,
      lastSync: "1 hour ago",
      syncStatus: "Syncing",
      language: "C#",
    },
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {platforms.map((platform) => (
        <PlatformCard
          key={platform.id}
          platform={platform}
        />
      ))}
    </div>
  );
}

export default PlatformList;