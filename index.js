
const search = document.getElementById("submitUser").addEventListener("click", getdata);


async function getdata(e){
  e.preventDefault();
  const inp = document.querySelector('#coins').value;
  const options = {
    headers: {
      'x-access-token': 'coinrankingafc2498cbd97375cab33890db00b637326b7d1f5ead32ef7',
    },
  };
  try{
    let value = await fetch(`https://api.coinranking.com/v2/coin/${inp}`, options)
    let nectval = await value.json()
    const data = document.querySelector('#data-list')
    data.innerHTML =`
    <div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${nectval.data.coin.iconUrl}" alt="">
        </div>
        <div class="col-md-5">
            <ul class="list-group">
                <li class="list-group-item">Name : ${nectval.data.coin.name}</li>
                <li class="list-group-item">Rank : ${nectval.data.coin.rank}</li>
                <li class="list-group-item">Price(dollar equivalent) : ${nectval.data.coin.price}</li>
                <li class="list-group-item">Marketcap(in dollars) : ${nectval.data.coin.marketCap}</li>
                <li class="list-group-item">Number of Exchanges : ${nectval.data.coin.numberOfExchanges}</li>
                <li class="list-group-item">Number of Markets : ${nectval.data.coin.numberOfMarkets}</li>
                <li class="list-group-item">Symbol : ${nectval.data.coin.symbol}</li>
            </ul>
        </div>
        <div class ="col-md-4">
            <p class= "border border-black border-1 p-2 rounded-2">Description: ${nectval.data.coin.description}</p>
        </div>
    </div>
    </div>
    `
  }catch(err){
    console.log(err)
    alert("Failed to fetch data");
  }
  
}
