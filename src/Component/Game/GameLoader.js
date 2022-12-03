import React, { useState, useEffect } from 'react'

import Unity, { UnityContext } from 'react-unity-webgl'

function GameLoader(props) {
  const [progression, setProgression] = useState(0)
  const [isLoaded, setLoaded] = useState(false)

  ////
  const unityContext = new UnityContext({
    loaderUrl: '../Build13/wheelgame.loader.js',
    dataUrl: '../Build13/wheelgame.data.unityweb',
    frameworkUrl: '../Build13/wheelgame.framework.js.unityweb',
    codeUrl: '../Build13/wheelgame.wasm.unityweb',
  })
  //loading
  useEffect(function () {
    unityContext.on('progress', function (progression) {
      setProgression(progression)
    })
  }, [])
  useEffect(function () {
    unityContext.on('loaded', function () {
      setLoaded(true)
    })
  }, [])

  return (
    <>
      <div className="container">
        {isLoaded === false && (
          <div className="loading-overlay">
            {Math.round(progression * 100)}%
            {/* <h1>
              <span class="let1">l</span>
              <span class="let2">o</span>
              <span class="let3">a</span>
              <span class="let4">d</span>
              <span class="let5">i</span>
              <span class="let6">n</span>
              <span class="let7">g</span>
            </h1> */}
          </div>
        )}

        <div className="unity">
          <Unity className="unity-con" unityContext={unityContext} />
        </div>
      </div>
    </>
  )
}

export default GameLoader
