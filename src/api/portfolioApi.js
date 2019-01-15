const restParams = {protocol: 'http', hostname: 'localhost', port: 4000};

export const portfolioRequest = (sector) => {
  if(!sector) {
    return portfolioRequestAll();
  }
  
  const url = `${restParams.protocol}://${restParams.hostname}:${restParams.port}`;
  const sectorName = sector.replace(/\+/g, ' ').toLowerCase();
  return fetch(`${url}/portfolio/${sectorName}`);
}

export const portfolioRequestAll = () => {
  const url = `${restParams.protocol}://${restParams.hostname}:${restParams.port}`;
  return fetch(`${url}/portfolio/`);
}

export const sectorsRequest = () => {
  const url = `${restParams.protocol}://${restParams.hostname}:${restParams.port}`;
  return fetch(`${url}/sectors`);
}

