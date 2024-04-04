'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import WebSocket from 'isomorphic-ws';

function WebSocketComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    var ws = new WebSocket('wss://testnet.binance.vision/ws/btcusdt@ticker');

    ws.onopen = () => {
      console.log('connected');
    };

    ws.onmessage = (evt) => {
      // Aqui você pode processar os dados recebidos
      const message = JSON.parse(evt.data);
      
      setData(message);
    };

    ws.onclose = () => {
      console.log('disconnected');
      // automaticamente tentar reconectar em caso de perda de conexão
      ws = new WebSocket('wss://testnet.binance.vision/ws/btcusdt@ticker');
    };

    // limpar na desmontagem
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.e} - {data.s}</h2>
          <p>Total de trades: {data.n}</p>
          <p>Último preço: {data.c}</p>
          <p>Preço de abertura: {data.o}</p>
          <p>Preço mais alto: {data.h}</p>
          <p>Último preço: {data.l}</p>
          <p>Variação Preço %: {data.P}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default WebSocketComponent;