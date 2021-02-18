function calculateTip(amount, rating) {
  if (rating.toLowerCase() === 'terrible') return Math.ceil((amount * 0) / 100);
  if (rating.toLowerCase() === 'poor') return Math.ceil((amount * 5) / 100);
  if (rating.toLowerCase() === 'good') return Math.ceil((amount * 10) / 100);
  if (rating.toLowerCase() === 'great') return Math.ceil((amount * 15) / 100);
  if (rating.toLowerCase() === 'excellent')
    return Math.ceil((amount * 20) / 100);
}
console.log(calculateTip(20, 'Excellent'));
console.log(calculateTip(26.95, 'good'));
