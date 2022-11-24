# Webassembly on c# (using zig)

## install zig

### from official website 

```url
https://ziglang.org/download/
```

## by Setting up PATH on Windows

```powershell
[Environment]::SetEnvironmentVariable(
   "Path",
   [Environment]::GetEnvironmentVariable("Path", "Machine") + ";C:\your-path\zig-windows-x86_64-your-version",
   "Machine"
)
```

### By Package managers

```command
Choose one by your OS

choco install zig
brew install zig
port install zig
```

## coding zig

it's simple code for test

```zig
export fn fibo(a: i32, b: i32) i32 {
    return(a + b);
}
```

when you finish coding , use this command for generate wasm file

```command
$ zig build-lib math.zig -target wasm32-freestanding -dynamic
```
this command generate wasm file in the source folder
