@extends('site.layout.index')

@section('content')
  @include('site.layout.partials._header')
  @include('site.home.partials._services')
  @include('site.home.partials._portfolio')
  @include('site.home.partials._about')
  @include('site.home.partials._contact')
  @include('site.layout.partials._footer')
  @include('site.home.partials._modals')
@endsection
