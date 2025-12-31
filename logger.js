export function logAction(action, user="system") {
  console.log(`[LOG] ${action} | ${user} | ${new Date()}`);
}
